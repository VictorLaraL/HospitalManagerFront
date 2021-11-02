export const ADD_HOSPITAL_REQUEST = 'ADD_HOSPITAL_REQUEST'
export const ADD_HOSPITAL_SUCCESS = 'ADD_HOSPITAL_SUCCESS'
export const ADD_HOSPITAL_ERROR = 'ADD_HOSPITAL_ERROR'

export const GET_HOSPITAL_REQUEST = 'GET_HOSPITAL_REQUEST'
export const GET_HOSPITAL_SUCCESS = 'GET_HOSPITAL_SUCCESS'
export const GET_HOSPITAL_ERROR = 'GET_HOSPITAL_ERROR'

export const GET_DETAIL_HOSPITAL_REQUEST = 'GET_DETAIL_HOSPITAL_REQUEST'
export const GET_DETAIL_HOSPITAL_SUCCESS = 'GET_DETAIL_HOSPITAL_SUCCESS'
export const GET_DETAIL_HOSPITAL_ERROR = 'GET_DETAIL_HOSPITAL_ERROR'

export const DELETE_HOSPITAL_REQUEST = 'DELETE_HOSPITAL_REQUEST'
export const DELETE_HOSPITAL_SUCCESS = 'DELETE_HOSPITAL_SUCCESS'
export const DELETE_HOSPITAL_ERROR = 'DELETE_HOSPITAL_ERROR'

export const EDIT_HOSPITAL_REQUEST = 'EDIT_HOSPITAL_REQUEST'
export const EDIT_HOSPITAL_SUCCESS = 'EDIT_HOSPITAL_SUCCESS'
export const EDIT_HOSPITAL_ERROR = 'EDIT_HOSPITAL_ERROR'

export const addHospital = (data) => ({
	type: ADD_HOSPITAL_REQUEST,
	payload: data,
})

export const getHospital = (data) => ({
	type: GET_HOSPITAL_REQUEST,
	payload: data,
})

export const getDetailHospital = (data) => ({
	type: GET_DETAIL_HOSPITAL_REQUEST,
	payload: data,
})

export const deleteHospital = (data) => ({
	type: DELETE_HOSPITAL_REQUEST,
	payload: data,
})

export const editHospital = (data) => ({
	type: EDIT_HOSPITAL_REQUEST,
	payload: data,
})