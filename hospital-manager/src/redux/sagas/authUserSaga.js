import { takeLatest, call, put } from 'redux-saga/effects'
import { getAuthUser } from '../../services/authUserServices'
import {
    GET_AUTH_USER_REQUEST,
    GET_AUTH_USER_SUCCESS,
    GET_AUTH_USER_ERROR,
} from '../actions/authUserActions'


export function* getAuthUserWatcher() {
    yield takeLatest(GET_AUTH_USER_REQUEST, getAuthUserFlow)
}

export function* getAuthUserFlow(action) {
    try {
        const user = yield call(getAuthUser, action.payload)
        yield put({ type: GET_AUTH_USER_SUCCESS, payload: user })
    } catch (e) {
        yield put({ type: GET_AUTH_USER_ERROR, payload: e })
    }
}