import {axiosService} from './requestService'
import {authHeader} from '../utils/core/functions'

export const addHospital = async (data) => {
	return axiosService
		.post('/api/hospitals', (data = {...data}), {
			//headers: authHeader(),
		})
		.then((res) => res.data)
}

export const getHospital = async (data) => {
	return axiosService
		.get('/api/hospitals', {
			//headers: authHeader(),
			params: {
				page: data,
			},
		})
		.then((res) => res.data)
}

export const deleteHospital = async (data) => {
	return axiosService
		.delete(`/api/hospitals/${data}`, {
			//headers: authHeader(),
		})
		.then((res) => res.data)
}

export const editHospital = async (data) => {
	return axiosService
		.put(`/api/hospitals/${data.id}/`, (data = {...data}), {
			//headers: authHeader(),
		})
		.then((res) => res.data)
}

export const getDetailHospital = async (data) => {
	return axiosService
		.get(`/api/hospitals/${data}`, {
			//headers: authHeader(),
		})
		.then((res) => res.data)
}