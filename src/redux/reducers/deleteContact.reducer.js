import { DELETE_CONTACT_SUCCESSFUL, DELETE_CONTACT_FAILED } from '../actions/types'

const initialState = {
    detail: []
}

const deleteContactReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_CONTACT_SUCCESSFUL:
            return {
                ...state,
                detail: payload.data
            }
        case DELETE_CONTACT_FAILED:
            return {
                ...state,
                detail: payload
            }
        default:
            return state;
    }
}

export default deleteContactReducer