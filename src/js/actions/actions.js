import axios				from 'axios';
import { browserHistory }	from 'react-router';

import firebase,  {firebaseRef, FBprovider}	from '../firebase/firebase';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////HELPER FUNCTIONS////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @brief	Returns a random number within a range
 *
 * @param	Number range
 *
 * @return	Number
 */
function getRandomFrom( range )
{
	return Math.floor( Math.random() * range );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////REGISTRATION//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @brief	Starts the registration process
 *
 * @return	Function
 */
export const startRegister = () =>
{
	return( dispatch, getState ) =>
	{
		let user	= firebase.auth().currentUser;

		firebaseRef.child( 'users/' + user.uid ).once( 'value' ).then( ( snapshot ) =>
			{
				if( snapshot.hasChild( 'id' ) )
				{
					browserHistory.push( 'stats' );
					return;
				}
				else
				{
					let currentDate	= Date.now();

					firebaseRef.child( 'users/' + user.uid ).set(
						{
							id				: user.uid,
							name			: user.displayName,
							email			: user.email,
							score			: 0,
							registeredOn	: currentDate
						}
					);

					dispatch( register( user.displayName ) );
					browserHistory.push( 'stats' );
				};
			}
		)
	}
};

/**
 * @brief	Registration action creator
 *
 * @param	String userName
 *
 * @return	Object
 */
export const register = ( userName ) =>
{
	return {
		type	: 'USER_REGISTERED',
		user	: userName
	};
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////AUTH//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * @brief	Starts the login process
 *
 * @return	Function
 */
export const startLogin = () =>
{
	return( dispatch, getState ) =>
	{
		return firebase.auth().signInWithPopup( FBprovider )
		.then( ( result ) =>
			{
				let user	= firebase.auth().currentUser;

				dispatch( login() );
				dispatch( startRegister() );

			}, ( e ) =>
			{
				console.log( e );
			}
		);
	}
};

/**
 * @brief	Login action creator
 *
 * @return	Object
 */
export const login = () =>
{
	return {
		type	: 'LOGIN',
		status	: true
	};
};

/**
 * @brief	Starts the logout process
 *
 * @return	Function
 */
export const startLogout = () =>
{
	return( dispatch, getState ) =>
	{
		return firebase.auth().signOut().then( () =>
			{
				dispatch( logout() );
				browserHistory.push( 'stats' );
			}, ( e ) =>
			{
				alert( e );
			}
		);
	}
};

/**
 * @brief	Logout action creator
 *
 * @return	Object
 */
export const logout = () =>
{
	return {
		type	: 'LOGOUT',
		status	: false
	};
};

/**
 * @brief	Get use data action creator
 *
 * @return	Object
 */
export const getUserData = ( userData ) =>
{
	return {
		type	: 'GET_USER_DATA',
		userData
	};
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////COUNTDOWN////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * @brief	Decrement action creator
 *
 * @return	Object
 */
export const decrement = () =>
{
	return {
		type: 'DECREMENT'
	};
};

/**
 * @brief	Reset countdown action creator
 *
 * @return	Object
 */
export const resetCountDown = () =>
{
	return {
		type: 'RESET_COUNTDOWN'
	};
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////MOVIE ACTIONS///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @brief	Start the fetch movie process
 *
 * @details	Fetches movies from firebase then dispatches action with a movie that hasn't been guessed yet to be fetched
 * 			from the movie API
 *
 * @return	Function
 */
export const getMovieName = () =>
{
	return( dispatch, getState ) =>
	{
		let movieNamesRef	= firebaseRef.child( '/movies' ).once( 'value' );
		movieNamesRef.then( ( snap ) =>
			{
				let movieNames			= snap.val() || {};
				let movieNamesLen		= movieNames.length;
				let state				= getState();
				let guessedMovies		= state.guessedMovies;
				let guessedMoviesTitles = guessedMovies.map( ( movie ) =>
					{
						movie.title.toLowerCase();
					}
				);

				let guessedMovieTitlesLen	= guessedMoviesTitles.length;
				let currentMovie			= movieNames[getRandomFrom( movieNamesLen )];

				if(
					( guessedMovieTitlesLen > 0 )
					&& ( guessedMoviesTitles.indexOf( currentMovie.toLowerCase() ) > -1 )
					&& ( guessedMovieTitlesLen < movieNamesLen )
				) {
					do
					{
						currentMovie	= movieNames[getRandomFrom( movieNamesLen )];
					}
					while( guessedMoviesTitles.indexOf( currentMovie.toLowerCase() ) > -1 );
				}

				dispatch( fetchMovie( currentMovie ) );
			}
		);
	}
};

/**
 * @brief	Starts the fetching a movie info from an external API
 *
 * @param	String currentMovie
 *
 * @return	Function
 */
export const fetchMovie = ( currentMovie ) =>
{
	return( dispatch, getState ) =>
	{
		const fetchURL	= `https://api.themoviedb.org/3/search/movie?api_key={{{insert api key here}}}&query=
							${currentMovie}`;

		dispatch( startFetching() );

		return axios.get( fetchURL ).then( ( response ) =>
			{
				let movieFromApi	= response.data.results[0];
				let posterBaseUrl	= 'http://image.tmdb.org/t/p/w185/';

				dispatch(
					storeMovie(
							movieFromApi.title,
							movieFromApi.overview,
							posterBaseUrl + movieFromApi.poster_path,
							movieFromApi.id
					)
				);
				dispatch( stopFetching() );
			}
		).catch( ( e ) =>
			{
				alert( 'Something went wrong: Refresh the Page!' );
			}
		);
	}
};

/**
 * @brief	Store movie action creator
 *
 * @param	String title
 * @param	String plot
 * @param	String posterUrl
 * @param	String imdbID
 *
 * @return	Object
 */
export const storeMovie = ( title, plot, posterURL, imdbID ) =>
{
	return {
		type	: 'STORE_MOVIE',
		title,
		plot,
		posterURL,
		imdbID
	};
};

/**
 * @brief	Store movie name action creator
 *
 * @return	Object
 */
export const storeMovieName = ( userInput ) =>
{
	return {
		type	: 'USER_INPUT',
		userInput
	};
};

/**
 * @brief	Clear movie name action creator
 *
 * @return	Object
 */
export const clearMovieName = () =>
{
	return {
		type: 'CLEAR_MOVIE_NAME'
	};
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////FETCHING BOOLEAN//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @brief	Start fetch action creator
 *
 * @return	Object
 */
export const startFetching = () =>
{
	return {
		type	: 'START_FETCHING',
		status	: true
	};
};

/**
 * @brief	Stop fetching action creator
 *
 * @return	Object
 */
export const stopFetching = () =>
{
	return {
		type	: 'STOP_FETCHING',
		status	: false
	};
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////GAME FLOW/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @brief	Start the game process
 *
 * @details	Dispatches actions to get a new movie name and removes all previously guessed movies
 *
 * @return	Function
 */
export const startGame = () =>
{
	return( dispatch, getState ) =>
		{
			dispatch( getMovieName() );
			dispatch( wipeOldGuessedMovies() );
		};
};

/**
 * @brief	Wipe previously guessed movies action creator
 *
 * @return	Object
 */
export const wipeOldGuessedMovies = () =>
{
	return {
		type: 'WIPE_OLD_GUESSED_MOVIES'
	};
};

/**
 * @brief	Increment game score action creator
 *
 * @return	Object
 */
export const incrementScore = () =>
{
	return {
		type: 'INCREMENT_SCORE'
	};
};

/**
 * @brief	Reset score action creator
 *
 * @return	Object
 */
export const resetScore = () =>
{
	return {
		type: 'RESET_SCORE'
	};
};

/**
 * @brief	Store a guessed movie action creator
 *
 * @return	Object
 */
export const guessedMovie = ( guessedMovieObject ) =>
{
	return {
		type	: 'STORE_GUESSED_MOVIE',
		guessedMovieObject
	};
};

/**
 * @brief	Initializes the end game process
 *
 * @details	Updates the user's score if it's higher than his record up to this date and dispatches appropriate
 * 			end game actions
 *
 *  @param	Number score
 *
 * @return	Function
 */
export const initEndGame = ( score ) =>
{
	return( dispatch, getState ) =>
	{
		let user	= firebase.auth().currentUser;

		if( user )
		{
			firebaseRef.child( 'users/' + user.uid ).once( 'value' ).then( ( snap ) =>
			{
				let userData	= snap.val();

				if( score > userData.score )
				{
					firebaseRef.child( 'users/' + user.uid ).update( { score } );
				}
			}, (e) => console.log( 'COULD NOT UPDATE SCORE' ) );
		}

		browserHistory.push( 'end' );

		dispatch( endGame() );
		dispatch( resetScore() );
	}
};

/**
 * @brief	Store movie name action creator
 *
 * @return	Object
 */
export const endGame = () =>
{
	return {
		type: 'END_GAME'
	};
};
