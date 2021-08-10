import { CONTACT_AVATAR_FAILED, CONTACT_AVATAR_SUCCESS, CONTACT_AVATAR } from "../actions/types";

const initialState = {
    avatar: [],
    loading: false
}

const contactAvatarReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case CONTACT_AVATAR:
            return{
                ...state,
                loading: true
            }
        case CONTACT_AVATAR_FAILED:
            return {
                ...state,
                avatar: payload,
                loading: false
            }
        case CONTACT_AVATAR_SUCCESS:
            return {
                ...state,
                avatar: payload,
                loading: false
            }
        default:
            return state
    }
}

export default contactAvatarReducer