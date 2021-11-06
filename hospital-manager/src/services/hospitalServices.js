import {axiosService} from './requestService'
import {authHeader} from '../utils/core/functions'

export const addAgent = async (data) => {
	return axiosService
		.post('/api/hospitals', (data = {...data}), {
			//headers: authHeader(),
		})
		.then((res) => res.data)
}

export const getAgent = async (data) => {
	return axiosService
		.get('/api/hospitals', {
			//headers: authHeader(),
			params: {
				page: data,
			},
		})
		.then((res) => res.data)
}

export const deleteAgent = async (data) => {
	return axiosService
		.delete(`/api/hospitals/${data}`, {
			//headers: authHeader(),
		})
		.then((res) => res.data)
}

export const editAgent = async (data) => {
	return axiosService
		.put(`/api/hospitals/${data.id}/`, (data = {...data}), {
			//headers: authHeader(),
		})
		.then((res) => res.data)
}

export const getDetailAgent = async (data) => {
	return axiosService
		.get(`/api/hospitals/${data}`, {
			//headers: authHeader(),
		})
		.then((res) => res.data)
}