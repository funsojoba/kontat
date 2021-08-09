import { FETCH_CONTACT, FETCH_CONTACT_FAILED, FETCH_CONTACT_SUCCESSFUL } from "../actions/types";

const initialState = {
    contacts:[]
}

const contactReducer = (state=initialState, action)=>{
    switch (action.type) {
        case FETCH_CONTACT:
            return{
                ...state,
                contacts:action.payload
            }
        case FETCH_CONTACT_FAILED:
            return{
                ...state,
                contacts:action.payload
            }
        case FETCH_CONTACT_SUCCESSFUL:
            return{
                ...state,
                contacts:action.payload
            }

        default:
            return state
    }
}

export default contactReducer