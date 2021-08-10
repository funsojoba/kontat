import { DELETE_CONTACT_SUCCESSFUL, DELETE_CONTACT_FAILED, DELETE_CONTACT } from "../types";
import axios from "axios";
import { headers } from "../../../request";
import { toast } from "react-toastify";
import BASEURL from "../../../baseURL";

const token = localStorage.getItem('token')

const deteleContactStart = ()=>({
    type: DELETE_CONTACT
})

const deleteContactSuccess = (payload)=>{
    return{
        type: DELETE_CONTACT_SUCCESSFUL,
        payload
    }
}

const deleteContactFailed = (payload) => {
    return {
        type: DELETE_CONTACT_FAILED,
        payload
    }
}


const deleteContact = (id)=> dispatch =>{
    dispatch(deteleContactStart())
    axios.delete(BASEURL+'api/v1/update-contact/'+id, headers(token))
    .then(res =>{
        dispatch(deleteContactSuccess(res))
        setInterval(()=>{
            window.location = "/contacts"
        }, 1000)
        toast("Contact deleted")
    }).catch(err =>{
        dispatch(deleteContactFailed(err))
    })
}

export default deleteContact