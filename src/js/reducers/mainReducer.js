import {combineReducers} from 'redux';

import {countDownReducer, userInputReducer, storingMovieReducer, fetchingStatusReducer} from './reducers';

export let mainReducer = combineReducers({
  countDown: countDownReducer,
  userInput: userInputReducer,
  fetchedMovie: storingMovieReducer,
  fetching: fetchingStatusReducer
});
