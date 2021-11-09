import {axiosService} from './requestService'
import {authHeader} from '../utils/core/functions'

export const addHospital = async (data) => {
	
	const params = new URLSearchParams()
	params.append('name', data.name)
	params.append('city', data.city)

	return axiosService
		.post('/api/hospitals', params, {
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
	
	const params = new URLSearchParams()
	params.append('name', data.name)
	params.append('city', data.city)
	console.log(params)

	return axiosService
		.put(`/api/hospitals/${data.id}/`, params, {
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