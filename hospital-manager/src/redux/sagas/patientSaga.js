import {takeLatest, call, put} from 'redux-saga/effects'
import {
	addPatient,
	getPatient,
	getDetailPatient,
	deletePatient,
	editPatient,
} from '../../services/patientServices'
import {
	ADD_PATIENT_REQUEST,
	ADD_PATIENT_SUCCESS,
	ADD_PATIENT_ERROR,
	GET_PATIENT_REQUEST,
	GET_PATIENT_SUCCESS,
	GET_PATIENT_ERROR,
	GET_DETAIL_PATIENT_REQUEST,
	GET_DETAIL_PATIENT_SUCCESS,
	GET_DETAIL_PATIENT_ERROR,
	DELETE_PATIENT_REQUEST,
	DELETE_PATIENT_SUCCESS,
	DELETE_PATIENT_ERROR,
	EDIT_PATIENT_REQUEST,
	EDIT_PATIENT_SUCCESS,
	EDIT_PATIENT_ERROR,
} from '../actions/patientActions'

export function* addPatientWatcher() {
	yield takeLatest(ADD_PATIENT_REQUEST, addPatientFlow)
}

export function* addPatientFlow(action) {
	try {
		yield call(addPatient, action.payload)
		yield put({type: ADD_PATIENT_SUCCESS, payload: {}})
	} catch (e) {
		yield put({type: ADD_PATIENT_ERROR, payload: e})
	}
}

export function* addPatientSuccessWatcher() {
	yield takeLatest(ADD_PATIENT_SUCCESS, papginationRefresh)
}

export function* getPatientWatcher() {
	yield takeLatest(GET_PATIENT_REQUEST, getPatientFlow)
}

export function* getPatientFlow(action) {
	try {
		const patientList = yield call(
			getPatient,
			action.payload.page
		)
		yield put({
			type: GET_PATIENT_SUCCESS,
			payload: {
				list: patientList,
				currentPage: action.payload.page,
			},
		})
	} catch (e) {
		yield put({type: GET_PATIENT_ERROR, payload: e})
	}
}

export function* getDetailPatientWatcher() {
	yield takeLatest(
		GET_DETAIL_PATIENT_REQUEST,
		getDetailPatientFlow
	)
}

export function* getDetailPatientFlow(action) {
	try {
		const detailPatient = yield call(
			getDetailPatient,
			action.payload
		)
		yield put({
			type: GET_DETAIL_PATIENT_SUCCESS,
			payload: {
				detail: detailPatient,
			},
		})
	} catch (e) {
		yield put({type: GET_DETAIL_PATIENT_ERROR, payload: e})
	}
}

export function* deletePatientWatcher() {
	yield takeLatest(
		DELETE_PATIENT_REQUEST,
		deletePatientFlow
	)
}

export function* deletePatientFlow(action) {
	try {
		const patientDel = yield call(
			deletePatient,
			action.payload
		)
		yield put({
			type: DELETE_PATIENT_SUCCESS,
			payload: patientDel,
		})
	} catch (e) {
		yield put({type: DELETE_PATIENT_ERROR, payload: e})
	}
}

export function* deletePatientSuccessWatcher() {
	yield takeLatest(DELETE_PATIENT_SUCCESS, papginationRefresh)
}

export function* editPatientWatcher() {
	yield takeLatest(EDIT_PATIENT_REQUEST, editPatientFlow)
}

export function* editPatientFlow(action) {
	try {
		yield call(editPatient, action.payload)
		yield put({type: EDIT_PATIENT_SUCCESS, payload: {}})
	} catch (e) {
		yield put({type: EDIT_PATIENT_ERROR, payload: e})
	}
}

export function* editPatientSuccessWatcher() {
	yield takeLatest(EDIT_PATIENT_SUCCESS, papginationRefresh)
}

export function* papginationRefresh(action) {
	yield put({
		type: GET_PATIENT_REQUEST,
		payload: {page: 1},
	})
}