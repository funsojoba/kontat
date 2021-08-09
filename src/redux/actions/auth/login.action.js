import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILED } from "../types";
import { toast } from "react-toastify";
// import { Redirect } from "react-router-dom";

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
        axios.post('http://127.0.0.1:8000/auth/login/', payload)
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