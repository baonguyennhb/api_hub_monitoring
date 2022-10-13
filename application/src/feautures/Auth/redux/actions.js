import axios from 'axios'
import * as CONSTANTS from './constants'
import { pushMessageError, pushMessageSuccess } from '../../../layouts/Notification'

export function login(params) {
    return dispatch => {
        dispatch(loginLoadingAction())
        axios.post(process.env.REACT_APP_BASE_URL + "/api/v1/user/login", params)
            .then(res => dispatch(setTokenAction(res.data)))
    }
}

export function loginLoadingAction() {
    return {
        type: CONSTANTS.LOGIN_LOADING,
        payload: null
    }
}
export function setTokenAction(data) {
    console.log(data)
    if (data.code === 200) {
        localStorage.setItem(CONSTANTS.ARG_TOKEN, JSON.stringify(data))
    } else {
        pushMessageError(data.message)
    }
    return {
        type: CONSTANTS.SET_TOKEN_ACTION,
        payload: null
    }
}
export function clearToken() {
    console.log("Clear Token")
    window.location.replace("/")
    localStorage.removeItem(CONSTANTS.ARG_TOKEN)
    return dispatch => {
        dispatch(clearTokenAction())
    }
}
export function clearTokenAction() {
    return {
        type: CONSTANTS.CLEAR_TOKEN_ACTION,
        payload: null
    }
}

export function editAccount(params) {
    const { userId, name, username, password } = params
    axios
        .post(process.env.REACT_APP_BASE_URL + `/api/v1/user/${userId}`, { name: name, username: username, password: password })
        .then(res => {
            if (res.data.code === 200) {
                pushMessageSuccess(res.data.message)
                setTimeout(() => {
                    window.location.replace("/")
                }, 1500)
                localStorage.removeItem(CONSTANTS.ARG_TOKEN)
            } else {
                pushMessageError(res.data.error)
            }
        })
}