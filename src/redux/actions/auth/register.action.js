import { REGISTER_SUCCESS, REGISTER_FAILED } from "../types";
import axios from "axios";
import { toast } from "react-toastify";


import BASEURL from "../../../baseURL";

const registerSuccess = (payload) => ({
    type: REGISTER_SUCCESS,
    payload,
});

const registerFailed = (payload) => ({
    type: REGISTER_FAILED,
    payload,
});

const register = (payload) => async (dispatch) => {
        console.log('From payload',payload)
        axios.post(BASEURL+"auth/register/", payload)
        .then(res =>{
            toast.success("Welcome on board")
            return dispatch(registerSuccess(res))
        }).catch(error =>{
            const err = Object.values(error.response.data.error)[0]
            toast.error(err[0])
            return dispatch(registerFailed(error.response.data))
        })
};

export default register;