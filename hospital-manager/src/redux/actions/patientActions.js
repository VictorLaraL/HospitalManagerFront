export const ADD_PATIENT_REQUEST = 'ADD_PATIENT_REQUEST'
export const ADD_PATIENT_SUCCESS = 'ADD_PATIENT_SUCCESS'
export const ADD_PATIENT_ERROR = 'ADD_PATIENT_ERROR'

export const GET_PATIENT_REQUEST = 'GET_PATIENT_REQUEST'
export const GET_PATIENT_SUCCESS = 'GET_PATIENT_SUCCESS'
export const GET_PATIENT_ERROR = 'GET_PATIENT_ERROR'

export const GET_DETAIL_PATIENT_REQUEST = 'GET_DETAIL_PATIENT_REQUEST'
export const GET_DETAIL_PATIENT_SUCCESS = 'GET_DETAIL_PATIENT_SUCCESS'
export const GET_DETAIL_PATIENT_ERROR = 'GET_DETAIL_PATIENT_ERROR'

export const DELETE_PATIENT_REQUEST = 'DELETE_PATIENT_REQUEST'
export const DELETE_PATIENT_SUCCESS = 'DELETE_PATIENT_SUCCESS'
export const DELETE_PATIENT_ERROR = 'DELETE_PATIENT_ERROR'

export const EDIT_PATIENT_REQUEST = 'EDIT_PATIENT_REQUEST'
export const EDIT_PATIENT_SUCCESS = 'EDIT_PATIENT_SUCCESS'
export const EDIT_PATIENT_ERROR = 'EDIT_PATIENT_ERROR'

export const addPatient = (data) => ({
	type: ADD_PATIENT_REQUEST,
	payload: data,
})

export const getPatient = (data) => ({
	type: GET_PATIENT_REQUEST,
	payload: data,
})

export const getDetailPatient = (data) => ({
	type: GET_DETAIL_PATIENT_REQUEST,
	payload: data,
})

export const deletePatient = (data) => ({
	type: DELETE_PATIENT_REQUEST,
	payload: data,
})

export const editPatient = (data) => ({
	type: EDIT_PATIENT_REQUEST,
	payload: data,
})