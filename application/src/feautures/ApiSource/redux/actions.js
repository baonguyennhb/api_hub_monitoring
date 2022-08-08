import * as CONSTANTS  from './constants'
import axios from 'axios'
import { pushMessageSuccess } from "../../../layouts/Notification"
export function fetchingTableApiSource(){
    return dispatch => {
        dispatch(fetchingLoadingAction())
        axios.get("http://localhost:4000/api/v1/api-source/list")
            .then(res => {
                dispatch(fetchingAction(res))
            })
    }
}
export function fetchingAction(response) {
    return {
        type: CONSTANTS.FETCHING_LIST_APISOURCE,
        payload: response
    }
}
export function fetchingLoadingAction() {
    return {
        type: CONSTANTS.FETCHING_LIST_APISOURCE_LOADDING,
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
    if (response.data.code === 200) {
        pushMessageSuccess("Add Device Sucessfully!");
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

export function deleteDevice(params) {
    return dispatch => {
        dispatch(deleteActionLoading())
        axios.delete("http://localhost:4000/api/v1/device/delete", params = {params})
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