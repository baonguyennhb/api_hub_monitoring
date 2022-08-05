import axios from 'axios'
import * as CONSTANTS from './constants'

export function fetchingTableDevice() {
    return dispatch => {
        dispatch(fetchingLoadingAction)
        axios.get('http://localhost:4000/api/v1/device/list')
            .then(res => {
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


export function createDevice(params) {
    console.log(params)
    return dispatch => {
        dispatch(createActionLoading())
        axios.post("http://localhost:4000/api/v1/device/add", params)
            .then(res => {
                dispatch(createAction(res))
            })
    }
}

export function createAction(response) {
    return {
        type: CONSTANTS.CREATE_DEVICE,
        payload: response
    }
}

export function createActionLoading() {
    return {
        type: CONSTANTS.CREATE_DEVICE_LOADING,
        payload: {}
    }
}