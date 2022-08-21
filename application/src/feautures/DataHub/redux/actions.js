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



