import {combineReducers} from 'redux';

import { countDownReducer, userInputReducer, storingMovieReducer,
        fetchingStatusReducer, loginReducer, registerReducer, userDataReducer,
        guessedMoviesReducer, scoreReducer } from './reducers';

export let mainReducer = combineReducers({
  countDown: countDownReducer,
  userInput: userInputReducer,
  fetchedMovie: storingMovieReducer,
  fetching: fetchingStatusReducer,
  auth: loginReducer,
  registered: registerReducer,
  userData: userDataReducer,
  score: scoreReducer,
  guessedMovies: guessedMoviesReducer,
});
