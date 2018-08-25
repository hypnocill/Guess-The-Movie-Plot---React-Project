import { combineReducers } from 'redux';

import
{
	countDownReducer, userInputReducer, storingMovieReducer,
	fetchingStatusReducer, loginReducer, registerReducer, userDataReducer,
	guessedMoviesReducer, scoreReducer
}
from './reducers';

/**
 * @brief	Combines all reducers
 *
 * @return	Function
 */
export let mainReducer	= combineReducers(
	{
		countDown		: countDownReducer,
		userInput		: userInputReducer,
		fetchedMovie	: storingMovieReducer,
		fetching		: fetchingStatusReducer,
		auth			: loginReducer,
		registered		: registerReducer,
		userData		: userDataReducer,
		score			: scoreReducer,
		guessedMovies	: guessedMoviesReducer,
	}
);
