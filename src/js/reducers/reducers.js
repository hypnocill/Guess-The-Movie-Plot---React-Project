/**
 * @brief	Reducer for registration
 *
 * @param	String state
 * @param	Object action
 *
 * @return	Object
 */
export const registerReducer	= ( state = '', action ) =>
{
	switch( action.type )
	{
		case 'USER_REGISTERED':
			return action.user;

		default:
			return state;
	}
}

/**
 * @brief	Reducer for user data
 *
 * @param	Object|String state
 * @param	Object action
 *
 * @return	Object
 */
export const userDataReducer	= ( state = '', action ) =>
{
	switch( action.type )
	{
		case 'GET_USER_DATA':
			return action.userData;

		default:
			return state;
	}
}

/**
 * @brief	Reducer for login
 *
 * @param	String state
 * @param	Object action
 *
 * @return	String
 */
export const loginReducer = ( state = '', action ) =>
{
	switch( action.type )
	{
		case 'LOGIN':
			return action.status;

		case 'LOGOUT':
			return action.status;

		default:
			return state;
	}
}

/**
 * @brief	Reducer for game start countdown
 *
 * @param	Number state
 * @param	Object action
 *
 * @return	Number
 */
export const countDownReducer = ( state = 3, action ) =>
{
	switch( action.type )
	{
		case 'DECREMENT':
			return state - 1;

		case 'RESET_COUNTDOWN':
			return 3;

		default:
		return state;
	};
};

/**
 * @brief	Reducer for  movie name input
 *
 * @param	String state
 * @param	Object action
 *
 * @return	String
 */
export const userInputReducer = ( state = '', action ) =>
{
	switch( action.type )
	{
		case 'USER_INPUT':
			return action.userInput;

		case 'CLEAR_MOVIE_NAME':
			return '';

		default:
			return state;
	}
}

/**
 * @brief	Reducer for storing the movie in state
 *
 * @param	Object state
 * @param	Object action
 *
 * @return	Object
 */
export const storingMovieReducer = ( state = {}, action ) =>
{
	switch( action.type )
	{
		case 'STORE_MOVIE':
			return {
				title		: action.title,
				plot		: action.plot,
				posterURL	: action.posterURL,
				imdbID		: action.imdbID
			};

		default:
			return state;
	}
}

/**
 * @brief	Reducer for fetching status
 *
 * @param	String state
 * @param	Object action
 *
 * @return	String
 */
export const fetchingStatusReducer = ( state = '', action ) =>
{
	switch( action.type )
	{
		case 'START_FETCHING':
			return action.status;

		case 'STOP_FETCHING':
			return action.status;

		default:
			return state;
	}
}

/**
 * @brief	Reducer for the already guessed movies
 *
 * @param	Array state
 * @param	Object action
 *
 * @return	Array
 */
export const guessedMoviesReducer = ( state = [], action ) =>
{
	switch( action.type )
	{
		case 'STORE_GUESSED_MOVIE':
			return [
				...state,
				action.guessedMovieObject
			];

		case 'WIPE_OLD_GUESSED_MOVIES':
			return [];

		default:
			return state;
	}
}

/**
 * @brief	Reducer for user's score
 *
 * @param	Number state
 * @param	Object action
 *
 * @return	Number
 */
export const scoreReducer = ( state = 0, action ) =>
{
	switch( action.type )
	{
		case 'INCREMENT_SCORE':
			return state + 1;

		case 'RESET_SCORE':
			return 0;

		default:
			return state;
	}
}
