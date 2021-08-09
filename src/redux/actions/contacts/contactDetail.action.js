import {CONTACT_DETAIL_SUCCESS, CONTACT_DETAIL_FAILED} from '../types'

import axios from 'axios'
import { headers } from '../../../request'
import BASEURL from '../../../baseURL'

const token = localStorage.getItem('token')


const contactDetailFailed = payload =>({
    type: CONTACT_DETAIL_FAILED,
    payload
})

const contactDetailSuccess = payload => ({
    type: CONTACT_DETAIL_SUCCESS,
    payload
})

const getContactDetail = (id) => dispatch =>{
    axios.get(BASEURL+'api/v1/contact/'+id, headers(token))
    .then(res => {
        dispatch(contactDetailSuccess(res.data))
    }).catch(err =>{
        dispatch(contactDetailFailed(err))
    })
}

export default getContactDetail