import { USER_AVATAR_FAILED, USER_AVATAR_SUCCESS, USER_AVATAR } from "../actions/types";

const initialState = {
    avatar: [],
    loading: false
}

const userAvatarReducer = (state=initialState, action) =>{
    const {type, payload} = action

    switch (type) {
        case USER_AVATAR:
            return {
                ...state,
                loading: true
            }
        case USER_AVATAR_FAILED:
            return {
                ...state,
                avatar: payload,
                loading: false
            }
        case USER_AVATAR_SUCCESS:
            return {
                ...state,
                avatar: payload,
                loading: false
            }
    
        default:
            return state
    }
}

export default userAvatarReducer