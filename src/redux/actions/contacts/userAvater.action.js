import { USER_AVATAR_FAILED, USER_AVATAR_SUCCESS, USER_AVATAR } from "../types";
import axios from "axios";
import { headers } from "../../../request";
import { toast } from "react-toastify";
import BASEURL from "../../../baseURL";

const token = localStorage.getItem('token')

const userAvatarStart = ()=>({
    type: USER_AVATAR
})

const userAvatarSuccess = payload =>{
    return{
        type: USER_AVATAR_SUCCESS,
        payload
    }
}

const userAvatarFailed = payload =>{
    console.log(payload)
    return {
        type: USER_AVATAR_FAILED,
        payload
    }
}

const getUserAvatar = (payload) => dispatch =>{
    dispatch(userAvatarStart())
    axios.post(BASEURL+'api/v1/user-avatar', payload, headers(token))
    .then(res =>{
        dispatch(userAvatarSuccess(res.data))
        toast('Avatar updated')
        setInterval(()=>{
            window.location = '/contacts'
        }, 1000)
    }).catch(err => {
        dispatch(userAvatarFailed(err))
    })
}

export default getUserAvatar