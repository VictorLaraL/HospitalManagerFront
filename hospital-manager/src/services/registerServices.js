import {axiosService} from './requestService'

export const addUser = async (data) => {
	
	const params = new URLSearchParams()
	params.append('email', data.email)
	params.append('password', data.password)
    params.append('name', data.name)   

	return axiosService
		.post('/api/users/register', params, {
			headers:{'Content-Type': 'application/x-www-form-urlencoded'}
		})
		.then((res) => res.data)
}