import {createStore, applyMiddleware, compose} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'

import {rootReducer} from '../reducers/rootReducer'
import {rootSaga} from '../sagas/rootSaga'

const persistConfig = {
	key: 'root',
	storage,
	whiteList: ['authUserReducer'],
	blacklist: [
		'hospitalReducer',
		'patientReducer',
	],
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
	persistedReducer,
	compose(composeWithDevTools(applyMiddleware(sagaMiddleware)))
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)