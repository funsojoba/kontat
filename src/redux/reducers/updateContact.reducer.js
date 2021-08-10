import { UPDATE_CONTACT_FAILED, UPDATE_CONTACT_SUCCESSFUL, UPDATE_CONTACT } from "../actions/types"

const initialState = {
    update : [],
    loading: false
}


const updateContactReducer = (state=initialState, action)=>{
    const {type, payload} = action

    switch (type) {
        case UPDATE_CONTACT:
            return{
                ...state,
                loading: true
            }
        case UPDATE_CONTACT_FAILED:
            return{
                ...state,
                update: payload,
                loading: false
            }
        case UPDATE_CONTACT_SUCCESSFUL:
            return{
                ...state,
                update: payload,
                loading: false
            }
    
        default:
            return state;
    }
}

export default updateContactReducer