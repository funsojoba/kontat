import { FETCH_USER_FAILED, FETCH_USER_SUCCESS } from "../types";
import { headers } from "../../../request";
import axios from "axios";
import BASEURL from "../../../baseURL";

const token = localStorage.getItem('token')

const fetchUserSuccess = (payload) =>({
    type:FETCH_USER_SUCCESS,
    payload
})

const fetchUserFailed = (payload) => ({
    type:FETCH_USER_FAILED,
    payload
})

const fetchUser = () => dispatch =>{
    axios.get(BASEURL+'api/v1/user/', headers(token))
    .then(res => {
        dispatch(fetchUserSuccess(res.data))
    }).catch(err => {
        dispatch(fetchUserFailed(err))
        console.log(err)
    })
}

export default fetchUser