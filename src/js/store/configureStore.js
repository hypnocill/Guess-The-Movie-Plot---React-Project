import * as redux from 'redux';
import thunk from 'redux-thunk';

import { mainReducer } from '../reducers/mainReducer';

export default function configureStore(initialState = {}){
  const store = redux.createStore(
    mainReducer,
    initialState,
    redux.compose(redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}
