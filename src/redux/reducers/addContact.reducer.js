import { ADD_CONTACT, ADD_CONTACT_FAILED, ADD_CONTACT_SUCCESSFUL } from "../actions/types";

const initialState = {
    contact: [],
    loading:false,
    error:null,
    message:""
}


const addContactReducer = (state=initialState, action)=>{
    const {type, payload} = action
    
    switch (type) {
        case ADD_CONTACT:
            return{
                ...state,
                loading:true
            }
            
        case ADD_CONTACT_FAILED:
            return {
                ...state,
                contact: payload,
                loading:false
            }
        case ADD_CONTACT_SUCCESSFUL:
            return{
                ...state,
                contact: payload,
                loading:false
            }
        default:
            return state
    }
}

export default addContactReducer