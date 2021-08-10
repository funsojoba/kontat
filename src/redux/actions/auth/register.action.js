import { REGISTER_SUCCESS, REGISTER_FAILED, REGISTER } from "../types";
import axios from "axios";
import { toast } from "react-toastify";


import BASEURL from "../../../baseURL";

const registerStart = () =>({
    type: REGISTER
})

const registerSuccess = (payload) => ({
    type: REGISTER_SUCCESS,
    payload,
});

const registerFailed = (payload) => ({
    type: REGISTER_FAILED,
    payload,
});

const register = (payload) => async (dispatch) => {
        dispatch(registerStart())
        axios.post(BASEURL+"auth/register/", payload)
        .then(res =>{
            toast.success("Welcome on board")
            setInterval(function () {
                window.location = "/login";
            }, 2500);
            return dispatch(registerSuccess(res))
        }).catch(error =>{
            const err = Object.values(error.response.data.error)[0]
            toast.error(err[0])
            return dispatch(registerFailed(error.response.data))
        })
};

export default register;