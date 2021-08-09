import { SEND_MAIL_SUCCESS, SEND_MAIL_FAILED } from "../types";
import axios from "axios";
import { headers } from "../../../request";
import { toast } from "react-toastify";

const token = localStorage.getItem('token')
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
    axios.post('http://127.0.0.1:8000/api/v1/send-mail/'+id, payload, headers(token))
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