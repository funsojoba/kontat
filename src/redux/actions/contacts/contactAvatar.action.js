import { CONTACT_AVATAR_FAILED, CONTACT_AVATAR_SUCCESS, CONTACT_AVATAR } from '../types'

import axios from "axios";
import { headers } from "../../../request";
import { toast } from "react-toastify";
import BASEURL from '../../../baseURL';

const token = localStorage.getItem('token')

const contactAvatarStart = ()=>{
    return{
        type: CONTACT_AVATAR
    }
}

const contactAvatarSuccess = payload => {
    return {
        type: CONTACT_AVATAR_SUCCESS,
        payload
    }
}

const contactAvatarFailed = payload => {
    
    return {
        type: CONTACT_AVATAR_FAILED,
        payload
    }
}

const getContactAvatar = (payload, id) => dispatch => {
    dispatch(contactAvatarStart())
    axios.post(BASEURL+'api/v1/contact-avatar/'+id, payload, headers(token))
        .then(res => {
            dispatch(contactAvatarSuccess(res.data))
            toast('Avatar updated')
            setInterval(() => {
                window.location = '/detail/'+id
            }, 1000)
        }).catch(err => {
            dispatch(contactAvatarFailed(err))
        })
}

export default getContactAvatar