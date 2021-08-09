import { CONTACT_AVATAR_FAILED, CONTACT_AVATAR_SUCCESS } from '../types'

import axios from "axios";
import { headers } from "../../../request";
import { toast } from "react-toastify";

const token = localStorage.getItem('token')

const contactAvatarSuccess = payload => {
    return {
        type: CONTACT_AVATAR_SUCCESS,
        payload
    }
}

const contactAvatarFailed = payload => {
    console.log(payload)
    return {
        type: CONTACT_AVATAR_FAILED,
        payload
    }
}

const getContactAvatar = (payload, id) => dispatch => {
    axios.post('http://127.0.0.1:8000/api/v1/contact-avatar/'+id, payload, headers(token))
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