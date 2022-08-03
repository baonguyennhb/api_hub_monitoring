import axios from 'axios'
import * as CONSTANTS from './constants'

export function fetchingTableDevice() {
    return dispatch => {
        dispatch(fetchingLoadingAction)
        axios.get('http://localhost:4000/api/v1/device/list')
            .then(res => {
                console.log(res)
                dispatch(fetchingAction(res))
            })
    }
}
export function fetchingAction(response) {
    return {
        type: CONSTANTS.FETCHING_LIST_DEVICE,
        payload: response
    }
}
export function fetchingLoadingAction() {
    return {
        type: CONSTANTS.FETCHING_LIST_DEVICE_LOADING,
        payload: {}
    }
}