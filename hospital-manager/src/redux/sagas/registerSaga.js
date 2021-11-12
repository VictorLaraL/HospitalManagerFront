import {takeLatest, call, put} from 'redux-saga/effects'
import {
	addUser,
} from '../../services/registerServices'
import {
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,
} from '../actions/registerActions'

export function* addUserWatcher() {
	yield takeLatest(ADD_USER_REQUEST, addUserFlow)
}

export function* addUserFlow(action) {
	try {
		yield call(addUser, action.payload)
		yield put({type: ADD_USER_SUCCESS, payload: {}})
	} catch (e) {
		yield put({type: ADD_USER_ERROR, payload: e})
	}
}