import {
    GET_AUTH_USER_REQUEST,
    GET_AUTH_USER_SUCCESS,
    GET_AUTH_USER_ERROR,
  
    LOGOUT_USER,
  } from '../actions/authUserActions'
  
  const initialState = {
    name: null,  
    email: null,
    isAuthenticated: false,
    isLoadingAuthRequest: false,
    showErrorLoginMessage: false
  }
  
  export const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTH_USER_REQUEST:
            return {
                ...state,
                isLoadingAuthRequest: true,
                showErrorLoginMessage: false
            }
        case GET_AUTH_USER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoadingAuthRequest: false,
                showErrorLoginMessage: false
            }
        case GET_AUTH_USER_ERROR:
            return {
                ...state,
                isLoadingAuthRequest: false,
                showErrorLoginMessage: true,
                isAuthenticated: false
            }
        case LOGOUT_USER:
            return {
                ...initialState
            }
        default:
            return state
    }
  }