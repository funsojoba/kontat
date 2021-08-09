import { FETCH_CONTACT_SUCCESSFUL, FETCH_CONTACT_FAILED, SEARCH } from "../types";
import axios from 'axios'
import { headers } from '../../../request'

const token = localStorage.getItem('token')

const fetchContactSuccess = (payload) => {
    return {
        type: FETCH_CONTACT_SUCCESSFUL,
        payload
    }
}

const fetchContactFailed = (payload) => {
    return {
        type: FETCH_CONTACT_FAILED,
        payload
    }
}

export const searchContact = (payload)=>{
    console.log(payload)
    return {
        type: SEARCH,
        payload
    }
}

const getContact = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/v1/', headers(token))
        .then(res => {
            dispatch(fetchContactSuccess(res.data))
        }).catch(err => {
            dispatch(fetchContactFailed(err))
        })
}

export default getContact