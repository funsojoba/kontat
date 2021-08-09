import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from '../actions/types'

const initialState = {
    token:localStorage.getItem("token"),
    data: "",
    loading: false,
    error: "",
    message: "",
    loggedIn:false
}

const loginReducer = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case LOGIN:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.data.token)
            return {
                ...state,
                loading: true,
                error: null,
                data: payload.data.token,
                token: payload.data.token,
                message: payload.data.message,
                loggedIn:true
            }

        case LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
                message: payload.message,
                error: payload,
                loggedIn:false
            }

        default:
            return state
    }
}

export default loginReducer