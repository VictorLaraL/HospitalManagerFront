import axios from "axios";
//import { store } from "../redux/storeConfig/store";
//import { logoutUser } from "../redux/actions/authUserActions";

const axiosService = axios.create();
axiosService.defaults.baseURL = process.env.REACT_APP_API_HOST;

axiosService.interceptors.response.use(
    (response) => response,
    (error) => {
        const { status } = error.response;        
        if (status === parseInt(process.env.REACT_APP_API_UNAUTHORIZED_CODE)) {
            store.dispatch(logoutUser());
        }
        return Promise.reject(error);
    }
);
export { axiosService };