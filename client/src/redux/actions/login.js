import { LOGIN, LOGOUT } from '../actionTypes';
import * as api from '../../api';

export const googleLogin = (data) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN,
            payload: data
        })
    } catch(err) {
        console.log(err);
    } 
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({
            type: LOGOUT
        })
    } catch(err) {
        console.log(err);
    } 
}

export const jwtSignup = (loginFormData, navigate) => async (dispatch) => {
    // try {
    //     dispatch({
    //         type: LOGIN,
    //         payload: data
    //     })
    // } catch(err) {
    //     console.log(err);
    // } 
}

export const jwtSignin = (loginFormData, navigate) => async (dispatch) => {

    //const { data } = await api.fetchPosts();

    // try {
    //     dispatch({
    //         type: LOGIN,
    //         payload: data
    //     })
    // } catch(err) {
    //     console.log(err);
    // } 
}