import { LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from '../actions/types'

const initialState = {
    token:localStorage.getItem("token"),
    data: "",
    loading: false,
    error: "",
    message: ""
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
                loading: false,
                error: null,
                data: payload.data.token,
                token: payload.data.token,
                message: payload.data.message
            }

        case LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                data: null,
                message: payload.message,
                error: payload
            }

        default:
            return state
    }
}

export default loginReducer