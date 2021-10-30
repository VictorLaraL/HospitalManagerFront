import {axiosService} from './requestService'
import {authHeader} from '../utils/core/functions'

export const addAgent = async (data) => {
	return axiosService
		.post('/api/agent/', (data = {...data}), {
			headers: authHeader(),
		})
		.then((res) => res.data)
}

export const getAgent = async (data) => {
	return axiosService
		.get('/api/agentlist', {
			headers: authHeader(),
			params: {
				page: data,
			},
		})
		.then((res) => res.data)
}

export const deleteAgent = async (data) => {
	return axiosService
		.delete(`/api/agent/${data}`, {
			headers: authHeader(),
		})
		.then((res) => res.data)
}

export const editAgent = async (data) => {
	return axiosService
		.put(`/api/agent/${data.id}/`, (data = {...data}), {
			headers: authHeader(),
		})
		.then((res) => res.data)
}

export const getDetailAgent = async (data) => {
	return axiosService
		.get(`/api/agent/${data}`, {
			headers: authHeader(),
		})
		.then((res) => res.data)
}