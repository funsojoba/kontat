import { UPDATE_CONTACT_FAILED, UPDATE_CONTACT_SUCCESSFUL } from "../actions/types"

const initialState = {
    update : []
}


const updateContactReducer = (state=initialState, action)=>{
    const {type, payload} = action

    switch (type) {
        case UPDATE_CONTACT_FAILED:
            return{
                ...state,
                update: payload
            }
        case UPDATE_CONTACT_SUCCESSFUL:
            return{
                ...state,
                update: payload
            }
    
        default:
            return state;
    }
}

export default updateContactReducer