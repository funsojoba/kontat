import { SEND_MAIL_FAILED, SEND_MAIL_SUCCESS } from "../actions/types";

const initialState = {
    mail:[]
}

const sendMailReducer = (state=initialState, action)=>{
    
    const {type, payload} = action
    switch (type) {
        case SEND_MAIL_FAILED:
            return {
                ...state,
                mail:payload
            }
        case SEND_MAIL_SUCCESS:
            return {
                ...state,
                mail: payload
            }    
        default:
            return state
    }
}

export default sendMailReducer
