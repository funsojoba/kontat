import { CONTACT_DETAIL_SUCCESS, CONTACT_DETAIL_FAILED} from '../actions/types'

const initialState = {
    detail : []
}

const contactDetailReducer = (state=initialState, action)=>{
    const {type, payload} = action

    switch (type) {
        case CONTACT_DETAIL_SUCCESS:
            return{
                ...state,
                detail: payload.data
            }
        case CONTACT_DETAIL_FAILED:
            return{
                ...state,
                detail: payload
            }
        default:
            return state;
    }
}

export default contactDetailReducer