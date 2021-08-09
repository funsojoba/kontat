import { ADD_CONTACT, ADD_CONTACT_FAILED, ADD_CONTACT_SUCCESSFUL } from "../actions/types";

const initialState = {
    contact: []
}


const addContactReducer = (state=initialState, action)=>{
    const {type, payload} = action
    
    switch (type) {
        case ADD_CONTACT:
            return{
                ...state,
                contact: payload
            }
            
        case ADD_CONTACT_FAILED:
            return {
                ...state,
                contact: payload
            }
        case ADD_CONTACT_SUCCESSFUL:
            return{
                ...state,
                contact: payload
            }
        default:
            return state
    }
}

export default addContactReducer