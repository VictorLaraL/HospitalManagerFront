import {
	GET_HOSPITAL_REQUEST,
	GET_HOSPITAL_SUCCESS,
	GET_HOSPITAL_ERROR,

    GET_DETAIL_HOSPITAL_REQUEST,
    GET_DETAIL_HOSPITAL_SUCCESS,
    GET_DETAIL_HOSPITAL_ERROR,

    DELETE_HOSPITAL_REQUEST,
    DELETE_HOSPITAL_SUCCESS,
    DELETE_HOSPITAL_ERROR,

    EDIT_HOSPITAL_REQUEST,
    EDIT_HOSPITAL_SUCCESS,
    EDIT_HOSPITAL_ERROR,

    ADD_HOSPITAL_REQUEST,
    ADD_HOSPITAL_SUCCESS,
    ADD_HOSPITAL_ERROR

} from '../actions/hospitalActions'

const intialState = {
    isLoadingHospitalList:false,
    isLoadingAddHospital:false,
    isLoadingFetchHospital:false,
    isLoadingUpdateHospital:false,
    showError:false,
    showSuccess:false,
    erroeMessage:[],
    currentPage: 1,
    list:{
        hospitals:[]
    },
    detail:{
        id: '',
        name:'',
        city:'',
    }
}

export const hospitalReducer = (state=  intialState, action) => {
    switch (action.type) {
        case GET_HOSPITAL_REQUEST:
            return {
                ...state,
                isLoadingHospitalList: true,
				showSuccess: false
            }
        case GET_HOSPITAL_SUCCESS:
            return{
                ...state,
                isLoadingHospitalList: false,
                list: action.payload.list,
                currentPage: action.payload.currentPage,
				showSuccess: false,
                showError: false
            }
        case GET_HOSPITAL_ERROR:
            return {
                ...state,
                isLoadingHospitalList:false
            }
        case GET_DETAIL_HOSPITAL_REQUEST:
            return {
                ...state,
                isLoadingFetchHospital: true
            }
        case GET_DETAIL_HOSPITAL_SUCCESS:
            return {
                ...state,
                detail: action.payload.detail,
                isLoadingFetchHospital: false
            }
        case GET_DETAIL_HOSPITAL_ERROR:
            return {
                ...state,
                isLoadingFetchHospital:false
            }
        case DELETE_HOSPITAL_REQUEST:
            return {
                ...state,
                isLoadingHospitalList:true,
                showSuccess:false,
                showError:false
            }
        case DELETE_HOSPITAL_SUCCESS:
            return {
                ...state,
                isLoadingHospitalList:false,
                currentPage: action.payload.currentPage,
                showSuccess: true
            }
        case DELETE_HOSPITAL_ERROR:
            return {
                ...state,
                isLoadingHospitalList: false,
                showError: true
            }
        case EDIT_HOSPITAL_REQUEST:
            return {
                ...state,
                isLoadingUpdateHospital: true,
                showSuccess: false,
                showError: false
            }
        case EDIT_HOSPITAL_SUCCESS:
            return {
                ...state,
                isLoadingUpdateHospital: false,
                showSuccess: true
            }
        case EDIT_HOSPITAL_ERROR:
            return {
                ...state,
                isLoadingUpdateHospital: false,
                showError: true
            }
        case ADD_HOSPITAL_REQUEST:
            return {
                ...state,
                isLoadingAddHospital: true,
                showSuccess: false,
                showError: false
            }
        case ADD_HOSPITAL_SUCCESS:
            return {
                ...state,
                isLoadingAddHospital: false,
                showSuccess: true
            }
        case ADD_HOSPITAL_ERROR:
            return {
                ...state,
                isLoadingAddHospital: false,
                errorMessage: action.payload,
                showError: true,
            }
        default:
            return state
    }
}