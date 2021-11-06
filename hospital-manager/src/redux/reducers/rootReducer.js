import {combineReducers} from 'redux'
import {authUserReducer} from './authUserReducer'
import {hospitalReducer} from './hospitalReducer'

export const rootReducer = combineReducers({
	authUserReducer,
	hospitalReducer,
})