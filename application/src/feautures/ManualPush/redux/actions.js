import axios from 'axios'
import * as CONSTANTS from './constants'
import { pushMessageSuccess, pushMessageError, pushNotification } from "../../../layouts/Notification"
export function pushToDataHub( params) {
    return dispatch => {
        dispatch(pushActionLoading())
        axios.post(process.env.REACT_APP_BASE_URL + '/api/v1/push-manual', params)
            .then(res => {
                dispatch(pushAction(res))
            })
    }
}
export function pushAction(response) {
    console.log(response.data)
    if (response.data.code === 200) {
        pushNotification("success", response.data?.message)
    } else {
        pushMessageError(response.data?.error)
    }
    return {
        type: CONSTANTS.PUSH_MANUAL,
        payload: response
    }
}
export function pushActionLoading() {
    return {
        type: CONSTANTS.PUSH_MANUAL_LOADING,
        payload: {}
    }
}
