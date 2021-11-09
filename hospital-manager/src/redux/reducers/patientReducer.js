import {
	GET_PATIENT_REQUEST,
	GET_PATIENT_SUCCESS,
	GET_PATIENT_ERROR,

    GET_DETAIL_PATIENT_REQUEST,
    GET_DETAIL_PATIENT_SUCCESS,
    GET_DETAIL_PATIENT_ERROR,

    DELETE_PATIENT_REQUEST,
    DELETE_PATIENT_SUCCESS,
    DELETE_PATIENT_ERROR,

    EDIT_PATIENT_REQUEST,
    EDIT_PATIENT_SUCCESS,
    EDIT_PATIENT_ERROR,

    ADD_PATIENT_REQUEST,
    ADD_PATIENT_SUCCESS,
    ADD_PATIENT_ERROR

} from '../actions/patientActions'

const intialState = {
    isLoadingPatientList:false,
    isLoadingAddPatient:false,
    isLoadingFetchPatient:false,
    isLoadingUpdatePatient:false,
    showError:false,
    showSuccess:false,
    erroeMessage:[],
    currentPage: 1,
    list:{
        patients:[]
    },
    detail:{
        id: '',
        names:'',
        last_name:'',
        second_last_name:'',
        sex:'',
        bithday:'',
        inscription_date:'',
        id_hospital:'',
    }
}

export const patientReducer = (state=  intialState, action) => {
    switch (action.type) {
        case GET_PATIENT_REQUEST:
            return {
                ...state,
                isLoadingPatientList: true,
				showSuccess: false
            }
        case GET_PATIENT_SUCCESS:
            return{
                ...state,
                isLoadingPatientList: false,
                list: action.payload.list,
                currentPage: action.payload.currentPage,
				showSuccess: false,
                showError: false
            }
        case GET_PATIENT_ERROR:
            return {
                ...state,
                isLoadingPatientList:false
            }
        case GET_DETAIL_PATIENT_REQUEST:
            return {
                ...state,
                isLoadingFetchPatient: true
            }
        case GET_DETAIL_PATIENT_SUCCESS:
            return {
                ...state,
                detail: action.payload.detail,
                isLoadingFetchPatient: false
            }
        case GET_DETAIL_PATIENT_ERROR:
            return {
                ...state,
                isLoadingFetchPatient:false
            }
        case DELETE_PATIENT_REQUEST:
            return {
                ...state,
                isLoadingPatientList:true,
                showSuccess:false,
                showError:false
            }
        case DELETE_PATIENT_SUCCESS:
            return {
                ...state,
                isLoadingPatientList:false,
                currentPage: action.payload.currentPage,
                showSuccess: true
            }
        case DELETE_PATIENT_ERROR:
            return {
                ...state,
                isLoadingPatientList: false,
                showError: true
            }
        case EDIT_PATIENT_REQUEST:
            return {
                ...state,
                isLoadingUpdatePatient: true,
                showSuccess: false,
                showError: false
            }
        case EDIT_PATIENT_SUCCESS:
            return {
                ...state,
                isLoadingUpdatePatient: false,
                showSuccess: true
            }
        case EDIT_PATIENT_ERROR:
            return {
                ...state,
                isLoadingUpdatePatient: false,
                showError: true
            }
        case ADD_PATIENT_REQUEST:
            return {
                ...state,
                isLoadingAddPatient: true,
                showSuccess: false,
                showError: false
            }
        case ADD_PATIENT_SUCCESS:
            return {
                ...state,
                isLoadingAddPatient: false,
                showSuccess: true
            }
        case ADD_PATIENT_ERROR:
            return {
                ...state,
                isLoadingAddPatient: false,
                errorMessage: action.payload,
                showError: true,
            }
        default:
            return state
    }
}