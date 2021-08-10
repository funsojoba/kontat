import { DELETE_CONTACT_SUCCESSFUL, DELETE_CONTACT_FAILED, DELETE_CONTACT } from '../actions/types'

const initialState = {
    detail: [],
    loading: false
}

const deleteContactReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_CONTACT:
            return {
                ...state,
                loading: true
            }
        case DELETE_CONTACT_SUCCESSFUL:
            return {
                ...state,
                detail: payload.data,
                loading: false
            }
        case DELETE_CONTACT_FAILED:
            return {
                ...state,
                detail: payload,
                loading: false
            }
        default:
            return state;
    }
}

export default deleteContactReducer