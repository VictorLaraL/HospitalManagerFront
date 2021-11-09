import {axiosService} from './requestService'
import {authHeader} from '../utils/core/functions'

export const addPatient = async (data) => {
	return axiosService
		.post('/api/patients', (data = {...data}), {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
		})
		.then((res) => res.data)
}

export const getPatient = async (data) => {
	return axiosService
		.get('/api/patients', {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			params: {
				page: data,
			},
		})
		.then((res) => res.data)
}

export const deletePatient = async (data) => {
	return axiosService
		.delete(`/api/patients/${data}`, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
		.then((res) => res.data)
}

export const editPatient = async (data) => {
	return axiosService
		.put(`/api/patient/${data.id}/`, (data = {...data}), {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
		.then((res) => res.data)
}

export const getDetailPatient = async (data) => {
	return axiosService
		.get(`/api/patients/${data}`, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
		.then((res) => res.data)
}