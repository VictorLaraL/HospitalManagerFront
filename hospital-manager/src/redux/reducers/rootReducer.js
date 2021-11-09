import {combineReducers} from 'redux'
import {authUserReducer} from './authUserReducer'
import {hospitalReducer} from './hospitalReducer'
import {patientReducer} from './patientReducer'

export const rootReducer = combineReducers({
	authUserReducer,
	hospitalReducer,
	patientReducer,
})