import * as redux	from 'redux';
import thunk		from 'redux-thunk';

import { mainReducer }	from '../reducers/mainReducer';

/**
 * @brief	Configures the Redux Store with reducers, initial state, middleware thunk and devtools
 *
 * @param	Object initialState
 *
 * @return	Store
 */
export default function configureStore( initialState = {} )
{
	const store	= redux.createStore(
		mainReducer,
		initialState,
		redux.compose( redux.applyMiddleware( thunk ),
			window.devToolsExtension ? window.devToolsExtension() : f => f
		)
	);

	return store;
}
