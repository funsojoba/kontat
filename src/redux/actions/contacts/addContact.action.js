import { ADD_CONTACT_SUCCESSFUL, ADD_CONTACT_FAILED } from "../types";
import axios from "axios";
import { headers } from "../../../request";

const token = localStorage.getItem('token')


const addContactFailed = payload =>({
    type: ADD_CONTACT_FAILED,
    payload
})


const addContactSuccess = payload =>({
    type: ADD_CONTACT_SUCCESSFUL,
    payload
})

const addContact = (payload)=> dispatch =>{
    axios.post('http://127.0.0.1:8000/api/v1/create-contact', payload, headers(token))
    .then(res =>{
        dispatch(addContactSuccess(res.data))
        setInterval(function () {
            window.location = "/contacts";
        }, 1000);
    }).catch(err =>{
        dispatch(addContactFailed(err))
    })
}

export default addContact