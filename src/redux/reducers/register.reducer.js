import { REGISTER, REGISTER_SUCCESS, REGISTER_FAILED } from "../actions/types";

const initialState = {
    data:"",
    error:"",
    loading:false,
    message:""
}

const registerReducer = (state=initialState, action) =>{
    const {payload, type} = action

    switch (type) {
        case REGISTER:
            return {
                ...state,
                loading:true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                data:payload.data.data,
                error:null,
                loading:false,
                message:payload.message
            }
            
        case REGISTER_FAILED:
            return {
                ...state,
                data:null,
                error:payload.error,
                loading:false,
                message:payload.message
            }
    
        default:
            return state
    }
}

export default registerReducer