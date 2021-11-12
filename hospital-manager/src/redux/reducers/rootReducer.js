import {combineReducers} from 'redux'
import {authUserReducer} from './authUserReducer'
import {hospitalReducer} from './hospitalReducer'
import {patientReducer} from './patientReducer'
import {registerReducer} from './registerReducer'

export const rootReducer = combineReducers({
	authUserReducer,
	hospitalReducer,
	patientReducer,
	registerReducer,
})