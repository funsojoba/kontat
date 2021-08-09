import { UPDATE_CONTACT_SUCCESSFUL, UPDATE_CONTACT_FAILED } from "../types";
import axios from "axios";
import { headers } from "../../../request";
import { toast } from "react-toastify";

const token = localStorage.getItem('token')

const updateContactSuccess = (payload) => {
    return {
        type: UPDATE_CONTACT_SUCCESSFUL,
        payload
    }
}

const updateContactFailed = (payload) => {
    return {
        type: UPDATE_CONTACT_FAILED,
        payload
    }
}


const updateContact = (payload, id) => dispatch => {
    axios.put('http://127.0.0.1:8000/api/v1/update-contact/'+id, payload, headers(token))
    .then(res => {
        dispatch(updateContactSuccess(res.data))
        toast.success("Contact updated")
        console.log(res.data)
        setInterval(function () {
            window.location = "/detail/"+id;
        }, 1000);
        console.log(updateContactSuccess(res.data))
    }).catch(err =>{
        dispatch(updateContactFailed(err))
    })
}

export default updateContact