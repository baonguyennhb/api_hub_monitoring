import axios from 'axios'
import * as CONSTANTS from './constants'
import { pushMessageSuccess, pushMessageError } from "../../../layouts/Notification"
export function fetchingTableDevice( params) {
    return dispatch => {
        dispatch(fetchingLoadingAction)
        axios.get(process.env.REACT_APP_BASE_URL + '/api/v1/device/list', params = {params})
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

export function fetchingDetailDevice(params) {
    return dispatch => {
        axios.get(process.env.REACT_APP_BASE_URL + "/api/v1/device/detail", params = {params})
            .then(res => dispatch(fetchingDetailAction(res)))
    }
}

export function fetchingDetailAction(response) {
    return {
        type: CONSTANTS.FETCHING_DETAIL_DEVICE,
        payload: response
    }
} 


export function createDevice(params) {
    return dispatch => {
        dispatch(createActionLoading())
        axios.post(process.env.REACT_APP_BASE_URL + "/api/v1/device/add", params)
            .then(res => {
                dispatch(createAction(res))
            })
    }
}

export function createAction(response) {
    if (response.data.code === 200) {
        pushMessageSuccess("Add Device Sucessfully!");
    }
    if (response.data.code === 400) {
        pushMessageError(response.data.message);
    }
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


// Update Tag 

export function updateDevice (params) {
    return dispatch => {
        dispatch(updateActionLoading())
        axios.post(process.env.REACT_APP_BASE_URL + "/api/v1/device/edit", params, { params : {id: params.id}})
            .then(res => dispatch(updateAction(res)))
    }
}

export function updateAction(res) {
    if (res.data.code === 200) {
        pushMessageSuccess("Update Device Sucessfully!")
    }
    return {
        type: CONSTANTS.UPDATE_DEVICE,
        payload: res
    }
}

export function updateActionLoading() {
    return {
        type: CONSTANTS.UPDATE_DEVICE_LOADING,
        payload: {}
    }
}

export function deleteDevice(params) {
    return dispatch => {
        dispatch(deleteActionLoading())
        axios.delete(process.env.REACT_APP_BASE_URL + "/api/v1/device/delete", params = {params})
            .then(res => dispatch(deleteAction(res)))
    }
} 

export function deleteAction(response) {
    if (response.data.code ===200) {
        pushMessageSuccess("Delete Successfully!")
    }
    return {
        type: CONSTANTS.DELETE_DEVICE,
        payload: response
    }
}
export function deleteActionLoading() {
    return {
        type: CONSTANTS.DELETE_DEVICE_LOADING,
        payload: {}
    }
}