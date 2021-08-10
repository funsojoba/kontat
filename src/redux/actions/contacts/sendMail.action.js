import { SEND_MAIL_SUCCESS, SEND_MAIL_FAILED, SEND_MAIL } from "../types";
import axios from "axios";
import { headers } from "../../../request";
import { toast } from "react-toastify";
import BASEURL from "../../../baseURL";

const token = localStorage.getItem('token')

const sendMailStart =()=>{
    return{
        type: SEND_MAIL
    }
}

const sendMailFailed = (payload)=>{
    return {
        type: SEND_MAIL_FAILED,
        payload
    }
}

const sendMailSuccess = (payload)=>({
    type: SEND_MAIL_SUCCESS,
    payload
})

const sendMail = (payload, id) => (dispatch)=>{
    dispatch(sendMailStart())
    axios.post(BASEURL+'api/v1/send-mail/'+id, payload, headers(token))
    .then(res => {
        dispatch(sendMailSuccess(res.data))
        toast.success("Mail sent")
        console.log(res)
    }).catch(err =>{
        dispatch(sendMailFailed(err))
        console.log(err)
        toast.error(err.response.data.error)
    })
}

export default sendMail