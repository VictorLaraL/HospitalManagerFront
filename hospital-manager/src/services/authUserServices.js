import { axiosService } from "./requestService";

export const getAuthUser = async (data) => {
    return axiosService
        .post(`/api/token/`, (data = { ...data }))
        .then((res) => res.data);
};