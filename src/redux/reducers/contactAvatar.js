import { CONTACT_AVATAR_FAILED, CONTACT_AVATAR_SUCCESS } from "../actions/types";

const initialState = {
    avatar: []
}

const contactAvatarReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case CONTACT_AVATAR_FAILED:
            return {
                ...state,
                avatar: payload
            }
        case CONTACT_AVATAR_SUCCESS:
            return {
                ...state,
                avatar: payload
            }
        default:
            return state
    }
}

export default contactAvatarReducer