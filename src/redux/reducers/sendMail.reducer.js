import { SEND_MAIL_FAILED, SEND_MAIL_SUCCESS, SEND_MAIL } from "../actions/types";

const initialState = {
    mail:[],
    loading:false
}

const sendMailReducer = (state=initialState, action)=>{
    
    const {type, payload} = action
    switch (type) {
        case SEND_MAIL:
            return{
                ...state,
                loading:true
            }
        case SEND_MAIL_FAILED:
            return {
                ...state,
                mail:payload,
                loading: false
            }
        case SEND_MAIL_SUCCESS:
            return {
                ...state,
                mail: payload,
                loading: false
            }    
        default:
            return state
    }
}

export default sendMailReducer
