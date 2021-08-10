import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN } from "../types";
import { toast } from "react-toastify";
// import { Redirect } from "react-router-dom";
import BASEURL from "../../../baseURL";

const loginStart = () =>({
    type: LOGIN
})

const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
})

const loginFailure = (payload) => ({
    type: LOGIN_FAILED,
    payload
})

const login = (payload) =>{
    return function (dispatch){
        dispatch(loginStart())
        axios.post(BASEURL+'auth/login/', payload)
        .then(res =>{
            toast.success('Welcome back')
            dispatch(loginSuccess(res))
            setInterval(function () {
                window.location = "/contacts";
            }, 2500);
            
        }).catch(err => {
            toast.error(err.response.data.error)
            dispatch(loginFailure(err))
        })
    }
}

export default login