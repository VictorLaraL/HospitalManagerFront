import {takeLatest, call, put} from 'redux-saga/effects'
import {
	addHospital,
	getHospital,
	getDetailHospital,
	deleteHospital,
	editHospital,
} from '../../api/hospitalServices'
import {
	ADD_HOSPITAL_REQUEST,
	ADD_HOSPITAL_SUCCESS,
	ADD_HOSPITAL_ERROR,
	GET_HOSPITAL_REQUEST,
	GET_HOSPITAL_SUCCESS,
	GET_HOSPITAL_ERROR,
	GET_DETAIL_HOSPITAL_REQUEST,
	GET_DETAIL_HOSPITAL_SUCCESS,
	GET_DETAIL_HOSPITAL_ERROR,
	DELETE_HOSPITAL_REQUEST,
	DELETE_HOSPITAL_SUCCESS,
	DELETE_HOSPITAL_ERROR,
	EDIT_HOSPITAL_REQUEST,
	EDIT_HOSPITAL_SUCCESS,
	EDIT_HOSPITAL_ERROR,
} from '../actions/hospitalActions'

export function* addHospitalWatcher() {
	yield takeLatest(ADD_HOSPITAL_REQUEST, addHospitalFlow)
}

export function* addHospitalFlow(action) {
	try {
		yield call(addHospital, action.payload)
		yield put({type: ADD_HOSPITAL_SUCCESS, payload: {}})
	} catch (e) {
		yield put({type: ADD_HOSPITAL_ERROR, payload: e})
	}
}

export function* addHospitalSuccessWatcher() {
	yield takeLatest(ADD_HOSPITAL_SUCCESS, papginationRefresh)
}

export function* getHospitalWatcher() {
	yield takeLatest(GET_HOSPITAL_REQUEST, getHospitalFlow)
}

export function* getHospitalFlow(action) {
	try {
		const hospitalList = yield call(
			getHospital,
			action.payload.page
		)
		yield put({
			type: GET_HOSPITAL_SUCCESS,
			payload: {
				list: hospitalList,
				currentPage: action.payload.page,
			},
		})
	} catch (e) {
		yield put({type: GET_HOSPITAL_ERROR, payload: e})
	}
}

export function* getDetailHospitalWatcher() {
	yield takeLatest(
		GET_DETAIL_HOSPITAL_REQUEST,
		getDetailHospitalFlow
	)
}

export function* getDetailHospitalFlow(action) {
	try {
		const detailHospital = yield call(
			getDetailHospital,
			action.payload
		)
		yield put({
			type: GET_DETAIL_HOSPITAL_SUCCESS,
			payload: {
				detail: detailHospital,
			},
		})
	} catch (e) {
		yield put({type: GET_DETAIL_HOSPITAL_ERROR, payload: e})
	}
}

export function* deleteHospitalWatcher() {
	yield takeLatest(
		DELETE_HOSPITAL_REQUEST,
		deleteHospitalFlow
	)
}

export function* deleteHospitalFlow(action) {
	try {
		const hospitalDel = yield call(
			deleteHospital,
			action.payload
		)
		yield put({
			type: DELETE_HOSPITAL_SUCCESS,
			payload: hospitalDel,
		})
	} catch (e) {
		yield put({type: DELETE_HOSPITAL_ERROR, payload: e})
	}
}

export function* deleteHospitalSuccessWatcher() {
	yield takeLatest(DELETE_HOSPITAL_SUCCESS, papginationRefresh)
}

export function* editHospitalWatcher() {
	yield takeLatest(EDIT_HOSPITAL_REQUEST, editHospitalFlow)
}

export function* editHospitalFlow(action) {
	try {
		yield call(editHospital, action.payload)
		yield put({type: EDIT_HOSPITAL_SUCCESS, payload: {}})
	} catch (e) {
		yield put({type: EDIT_HOSPITAL_ERROR, payload: e})
	}
}

export function* editHospitalSuccessWatcher() {
	yield takeLatest(EDIT_HOSPITAL_SUCCESS, papginationRefresh)
}

export function* papginationRefresh(action) {
	yield put({
		type: GET_HOSPITAL_REQUEST,
		payload: {page: 1},
	})
}