import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from "../actions/types";

const initialState = {
    user: [],
    message:''
}

const userReducer = (state=initialState, action)=>{
    const {type, payload} = action

    switch (type) {
        case FETCH_USER:
            return{
                ...state,
                user: payload
            }
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                user: payload.data,
                message:payload.message
            }
        case FETCH_USER_FAILED:
            return{
                ...state,
                user: payload.data,
                message:payload.message
            }
    
        default:
            return state
    }
}
export default userReducer