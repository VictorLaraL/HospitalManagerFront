import {
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_ERROR,
} from '../actions/registerActions'

const initialState = {
    isLoadingAddRegister: false,
    showError:false,
    showSuccess:false, 
}

export const registerReducer = (state=  initialState, action) => {
    switch (action.type) {
        case ADD_USER_REQUEST:
            return {
                ...state,
                isLoadingAddRegister: true,
				showSuccess: false,
                showError: false
            }
        case ADD_USER_SUCCESS:
            return{
                ...state,
                isLoadingAddRegister: false,
				showSuccess: true,
                showError: false
            }
        case ADD_USER_ERROR:
            return {
                ...state,
                isLoadingAddRegister: false,
                showError: true
            }
        default:
            return state
    }
}