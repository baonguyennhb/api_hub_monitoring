import * as CONSTANTS  from './constants'
import axios from 'axios'
import { pushMessageError, pushMessageSuccess } from "../../../layouts/Notification"
export function fetchingTableApiSource(){
    return dispatch => {
        dispatch(fetchingLoadingAction())
        axios.get(process.env.REACT_APP_BASE_URL + "/api/v1/api-source/list")
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

export function fetchingDetailApiSource(params){
    return dispatch => {
        dispatch(fetchingDetailLoadingAction())
        axios.get(process.env.REACT_APP_BASE_URL + "/api/v1/api-source/detail", params = {params})
            .then(res => {
                dispatch(fetchingDetailAction(res))
            })
    }
}
export function fetchingDetailAction(response) {
    return {
        type: CONSTANTS.FETCHING_DETAIL_APISOURCE,
        payload: response
    }
}
export function fetchingDetailLoadingAction() {
    return {
        type: CONSTANTS.FETCHING_DETAIL_APISOURCE_LOADDING,
        payload: {}
    }
}

export function testConnectApiSource(params) {
    console.log("Test Connection")
    console.log(params)
    return dispatch => {
        axios.get(process.env.REACT_APP_BASE_URL + "/api/v1/api-source/test-connect", params = {params})
            .then(res => dispatch(testConnectAction(res)))
    }
}

export function testConnectAction(response) {
    if (response.data.data.code == 200) {
        pushMessageSuccess(response.data.data.status)
    } else {
        pushMessageError(response.data.data.status)
    }
    return {
        type: CONSTANTS.TEST_CONNECT_APISOURCE,
        payload: response
    }
}

export function createApiSource(params) {
    console.log(params)
    return dispatch => {
        dispatch(createActionLoading())
        axios.post(process.env.REACT_APP_BASE_URL + "/api/v1/api-source/add", params)
            .then(res => {
                dispatch(createAction(res))
            })
    }
}

export function createAction(response) {
    if (response.data.code === 200) {
        pushMessageSuccess("Add Api Source Sucessfully!");
    }
    if (response.data.code === 400) {
        pushMessageError(response.data.message);
    }
    return {
        type: CONSTANTS.CREATE_APISOURCE,
        payload: response
    }
}

export function createActionLoading() {
    return {
        type: CONSTANTS.CREATE_APISOURCE_LOADING,
        payload: {}
    }
}

// Update Api-source

export function updateApiSource (params) {
    return dispatch => {
        dispatch(updateActionLoading())
        axios.post(process.env.REACT_APP_BASE_URL + "/api/v1/api-source/edit", params, { params : {id: params.id}})
            .then(res => dispatch(updateAction(res)))
    }
}

export function updateAction(res) {
    if (res.data.code === 200) {
        pushMessageSuccess("Update Api-Source Sucessfully!")
    }
    return {
        type: CONSTANTS.UPDATE_APISOURCE,
        payload: res
    }
}

export function updateActionLoading() {
    return {
        type: CONSTANTS.UPDATE_APISOURCE_LOADING,
        payload: {}
    }
}

// Delete API source

export function deleteApiSource(params) {
    return dispatch => {
        dispatch(deleteActionLoading())
        axios.delete(process.env.REACT_APP_BASE_URL + "/api/v1/api-source/delete", params = {params})
            .then(res => dispatch(deleteAction(res)))
            .catch(error => pushMessageError(error.response.data.error))
    }
} 

export function deleteAction(response) {
    if (response.data.code ===200) {
        pushMessageSuccess("Delete Successfully!")
    }
    return {
        type: CONSTANTS.DELETE_APISOURCE,
        payload: response
    }
}
export function deleteActionLoading() {
    return {
        type: CONSTANTS.DELETE_APISOURCE_LOADING,
        payload: {}
    }
}