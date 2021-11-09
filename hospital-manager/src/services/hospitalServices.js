import {axiosService} from './requestService'
import {authHeader} from '../utils/core/functions'

export const addHospital = async (data) => {
	return axiosService
		.post('/api/hospitals', (data = {...data}), {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
		})
		.then((res) => res.data)
}

export const getHospital = async (data) => {
	return axiosService
		.get('/api/hospitals', {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			params: {
				page: data,
			},
		})
		.then((res) => res.data)
}

export const deleteHospital = async (data) => {
	return axiosService
		.delete(`/api/hospitals/${data}`, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
		.then((res) => res.data)
}

export const editHospital = async (data) => {
	return axiosService
		.put(`/api/hospitals/${data.id}/`, (data = {...data}), {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
		.then((res) => res.data)
}

export const getDetailHospital = async (data) => {
	return axiosService
		.get(`/api/hospitals/${data}`, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
		.then((res) => res.data)
}