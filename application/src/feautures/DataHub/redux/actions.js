import * as CONSTANTS  from './constants'
import axios from 'axios'
import { pushMessageError, pushMessageSuccess, pushMessageLoading } from "../../../layouts/Notification"

export function fetchingDetailDataHub(){
    return dispatch => {
        dispatch(fetchingDetailLoadingAction())
        axios.get(process.env.REACT_APP_BASE_URL + "/api/v1/data-hub/detail")
            .then(res => {
                dispatch(fetchingDetailAction(res))
            })
    }
}
export function fetchingDetailAction(response) {
    return {
        type: CONSTANTS.FETCHING_DETAIL_DATAHUB,
        payload: response
    }
}
export function fetchingDetailLoadingAction() {
    return {
        type: CONSTANTS.FETCHING_DETAIL_DATAHUB_LOADING,
        payload: {}
    }
}

// Update Data Hub

export function updateDataHub (params) {
    return dispatch => {
        dispatch(updateActionLoading())
        axios.post(process.env.REACT_APP_BASE_URL + "/api/v1/api-source/edit", params, { params : {id: params.id}})
            .then(res => dispatch(updateAction(res)))
    }
}

export function updateAction(res) {
    if (res.data.code === 200) {
        pushMessageSuccess("Update DataHub Sucessfully!")
    }
    return {
        type: CONSTANTS.UPDATE_DATAHUB,
        payload: res
    }
}

export function updateActionLoading() {
    return {
        type: CONSTANTS.UPDATE_DATAHUB_LOADING,
        payload: {}
    }
}

// Feching All Tag 
export function fetchingTableTagMqtt() {
    return dispatch => {
        dispatch(fetchingLoadingAction())
        axios.get(process.env.REACT_APP_BASE_URL + '/api/v1/data-hub/list/tag')
            .then(res => {
                dispatch(fetchingAction(res))
            })
    }
}
export function fetchingAction(response) {
    return {
        type: CONSTANTS.FETCHING_LIST_TAG_DATAHUB,
        payload: response
    }
}
export function fetchingLoadingAction() {
    return {
        type: CONSTANTS.FETCHING_LIST_TAG_DATAHUB_LOADING,
        payload: {}
    }
}
// Feching All Tag 

//Add Tag To Mqtt Table
export function addTag (params) {
    return dispatch => {
        dispatch(addTagActionLoading())
        axios.post(process.env.REACT_APP_BASE_URL + '/api/v1/data-hub/add/tag', params)
            .then(res => dispatch(addTagAction(res)))
    }
}

export function addTagActionLoading() {
    return {
        type: CONSTANTS.ADD_TAG_LOADING,
        payload: {}
    }
}

export function addTagAction(response) {
    if (response.data.code === 200) {
        pushMessageSuccess(response.data.data)
    } else {
        pushMessageError(response.data.error)
    }
    return {
        type: CONSTANTS.ADD_TAG,
        payload: response
    }
}

// Remove Tag

export function removeTag(params) {
    return dispatch => {
        dispatch(deleteActionLoading())
        axios.delete(process.env.REACT_APP_BASE_URL + "/api/v1/data-hub/remove/tag", params = {params})
            .then(res => dispatch(deleteAction(res)))
    }
}

export function deleteAction(response) {
    if (response.data.code === 200) {
        pushMessageSuccess("Remove Tag successfully!")
    }
    return {
        type: CONSTANTS.REMOVE_TAG,
        payload: response
    }
}
export function deleteActionLoading() {
    return {
        type:CONSTANTS.REMOVE_TAG_LOADING,
        payload: {}
    }
}

// Download Config

export function downloadConfig(params) {
    return dispatch => {
        dispatch(downloadActionLoading())
        axios.post(process.env.REACT_APP_BASE_URL + "/api/v1/data-hub/upload-config", params)
            .then(res => dispatch(downloadAction(res)))
    }
}

export function downloadAction(response) {
    if (response.data.code === 200) {
        pushMessageSuccess("Upload Config successfully!")
    } else if (response.data.code === 400) {
        pushMessageError("Upload Config Failed Because API-HUB not connect DATA-HUB!")
    }
    return {
        type: CONSTANTS.DOWNLOAD_CONFIG,
        payload: response
    }
}
export function downloadActionLoading() {
    return {
        type:CONSTANTS.DOWNLOAD_CONFIG_LOADING,
        payload: {}
    }
}

// Remove Tag Config

export function deleteTagConfig(params) {
    return dispatch => {
        dispatch(deleteConfigActionLoading())
        axios.post(process.env.REACT_APP_BASE_URL + "/api/v1/data-hub/remove-config/tag", params )
            .then(res => dispatch(deleteConfigAction(res)))
    }
}

export function deleteConfigAction(response) {
    if (response.data.code === 200) {
        pushMessageSuccess(response.data.message)
    } else {
        pushMessageError(response.data.error)
    }
    return {
        type: CONSTANTS.DELETE_TAG_CONFIG,
        payload: response
    }
}
export function deleteConfigActionLoading() {
    return {
        type:CONSTANTS.DELETE_TAG_CONFIG_LOADING,
        payload: {}
    }
}

export function connectDataHub (params) {
    return dispatch => {
        dispatch(connectDataHubActionLoading())
        axios.post(process.env.REACT_APP_BASE_URL + "/api/v1/data-hub/connect", params)
        .then(res => dispatch(connectDataHubAction(res)))
    }
}

export function connectDataHubAction(res) {
    console.log(res)
    if (res.data.code == 200) {
        pushMessageSuccess(res.data.message)
    } else {
        pushMessageError(res.data.error)
    }
    return {
        type: CONSTANTS.CONNECT_DATA_HUB,
        payload: res
    }
}
export function connectDataHubActionLoading() {
    return {
        type: CONSTANTS.CONNECT_DATA_HUB_LOADING,
        payload: {}
    }
}

export function disconnectDataHub () {
    return dispatch => {
        dispatch(disconnectDataHubActionLoading())
        axios.get(process.env.REACT_APP_BASE_URL + "/api/v1/data-hub/disconnect")
        .then(res => dispatch(disconnectDataHubAction(res)))
    }
}

export function disconnectDataHubAction(res) {
    if (res.data.code == 200) {
        pushMessageSuccess(res.data.message)
    } else {
        pushMessageError(res.data.error)
    }
    return {
        type: CONSTANTS.DISCONNECT_DATA_HUB,
        payload: res
    }
}
export function disconnectDataHubActionLoading() {
    //console.log("disconect")
    return {
        type: CONSTANTS.DISCONNECT_DATA_HUB_LOADING,
        payload: {}
    }
}

export function getStatusConnectDataHub () {
    return dispatch => {
        axios.get(process.env.REACT_APP_BASE_URL + "/api/v1/data-hub/connect")
        .then(res => dispatch(getStatusConnectDataHubAction(res)))
    }
}

export function getStatusConnectDataHubAction(res) {
    return {
        type: CONSTANTS.FECHING_CONNECT_DATA_HUB,
        payload: res
    }
}



