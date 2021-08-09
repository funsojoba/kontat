import { USER_AVATAR_FAILED, USER_AVATAR_SUCCESS } from "../actions/types";

const initialState = {
    avatar: []
}

const userAvatarReducer = (state=initialState, action) =>{
    const {type, payload} = action

    switch (type) {
        case USER_AVATAR_FAILED:
            return {
                ...state,
                avatar: payload
            }
        case USER_AVATAR_SUCCESS:
            return {
                ...state,
                avatar: payload
            }
    
        default:
            return state
    }
}

export default userAvatarReducer