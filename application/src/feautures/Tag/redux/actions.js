import axios from 'axios'
import * as CONSTANTS from './constants'
import { pushMessageSuccess } from "../../../layouts/Notification"

// Feching All Tag by Device
export function fetchingTableTag(params) {
    return dispatch => {
        dispatch(fetchingLoadingAction)
        axios.get(process.env.REACT_APP_BASE_URL + '/api/v1/tag/list', params = {params})
            .then(res => {
                dispatch(fetchingAction(res))
            })
    }
}
export function fetchingAction(response) {
    return {
        type: CONSTANTS.FETCHING_LIST_TAG,
        payload: response
    }
}
export function fetchingLoadingAction() {
    return {
        type: CONSTANTS.FETCHING_LIST_TAG_LOADING,
        payload: {}
    }
}
// Feching All Tag by Device

export function fetchingMonitorTag(params) {
    return dispatch => {
        dispatch(fetchingMonitorLoadingAction)
        axios.get(process.env.REACT_APP_BASE_URL + '/api/v1/tag/monitor', params = {params})
            .then(res => {
                dispatch(fetchingMonitorAction(res))
            })
    }
}
export function fetchingMonitorAction(response) {
    return {
        type: CONSTANTS.FETCHING_MONITOR_TAG,
        payload: response
    }
}
export function fetchingMonitorLoadingAction() {
    return {
        type: CONSTANTS.FETCHING_MONITOR_TAG_LOADING,
        payload: {}
    }
}

// Log monitoring tag 

export function fetchingMonitorLogTag(params) {
    return dispatch => {
        dispatch(fetchingMonitorLogLoadingAction)
        axios.get(process.env.REACT_APP_BASE_URL + '/api/v1/tag/log', params = {params})
            .then(res => {
                dispatch(fetchingMonitorLogAction(res))
            })
    }
}
export function fetchingMonitorLogAction(response) {
    return {
        type: CONSTANTS.FETCHING_LOG_TAG,
        payload: response
    }
}
export function fetchingMonitorLogLoadingAction() {
    return {
        type: CONSTANTS.FETCHING_LOG_TAG_LOADING,
        payload: {}
    }
}

// Log monitoring tag

export function createTag(params) {
    console.log(params)
    return dispatch => {
        dispatch(createActionLoading())
        axios.post(process.env.REACT_APP_BASE_URL + "/api/v1/tag/add", params)
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
        type: CONSTANTS.CREATE_TAG,
        payload: response
    }
}

export function createActionLoading() {
    return {
        type: CONSTANTS.CREATE_TAG_LOADING,
        payload: {}
    }
}

// Update Tag 

export function updateTag (params) {
    return dispatch => {
        dispatch(updateActionLoading())
        axios.post(process.env.REACT_APP_BASE_URL + "/api/v1/tag/edit", params, { params : {id: params.id}})
            .then(res => dispatch(updateAction(res)))
    }
}

export function updateAction(res) {
    if (res.data.code === 200) {
        pushMessageSuccess("Update Tag Sucessfully!")
    }
    return {
        type: CONSTANTS.UPDATE_TAG,
        payload: res
    }
}

export function updateActionLoading() {
    return {
        type: CONSTANTS.UPDATE_TAG_LOADING,
        payload: {}
    }
}

export function deleteTag(params) {
    return dispatch => {
        dispatch(deleteActionLoading())
        axios.delete(process.env.REACT_APP_BASE_URL + "/api/v1/tag/delete", params = {params})
            .then(res => dispatch(deleteAction(res)))
    }
}

export function deleteAction(response) {
    if (response.data.code === 200) {
        pushMessageSuccess("Delete Tag successfully!")
    }
    return {
        type: CONSTANTS.DELETE_TAG,
        payload: response
    }
}
export function deleteActionLoading() {
    return {
        type:CONSTANTS.DELETE_TAG_LOADING,
        payload: {}
    }
}
