import {axiosService} from './requestService'
import {authHeader} from '../utils/core/functions'

export const addPatient = async (data) => {
	console.log(data)
	const params = new URLSearchParams()
	params.append('names', data.names)
	params.append('last_name', data.last_name)
	params.append('second_last_name', data.second_last_name)
	params.append('sex', data.sex)
	params.append('birthday', data.birthday)
	params.append('inscription_date', data.inscription_date)
	params.append('id_hospital', data.id_hospital)
	console.log(params)

	return axiosService
		.post('/api/patients', params, {
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

	const params = new URLSearchParams()
	params.append('names', data.names)
	params.append('last_name', data.last_name)
	params.append('second_last_name', data.second_last_name)
	params.append('sex', data.sex)
	params.append('birthday', data.birthday)
	params.append('inscription_date', data.inscription_date)
	params.append('id_hospital', data.id_hospital)

	return axiosService
		.put(`/api/patient/${data.id}/`, params, {
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