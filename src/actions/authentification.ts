import axios from "axios";
import { GET_ERRORS } from "./types";

export const registerUser = (user: any, history: any) => (dispatch: any) => {
    axios
        .post("api/users/register", user)
        .then(res => {
            history.push("/login");
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

export const loginUser = (user: any) => (dispatch: any) => {
    axios
        .post("api/users/register", user)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};
