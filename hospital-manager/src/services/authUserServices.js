import { axiosService } from "./requestService";

export const getAuthUser = async (data) => {

    const params = new URLSearchParams()
	params.append('email', data.email)
	params.append('password', data.password)    

    return axiosService
        .post(`/api/users/login/`, params,{
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
		})
        .then((res) => res.data);
};