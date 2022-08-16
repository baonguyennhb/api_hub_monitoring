import * as CONSTANTS from './constants'
import axios from 'axios'
export function fechingTableReport() {
    return dispatch => {
        dispatch(fetchingLoadingAction())
        axios.get(process.env.REACT_APP_BASE_URL + "/api/v1/report/list/cfg")
            .then(res => {
                dispatch(fetchingAction(res))
            })
    }
}

export function fetchingAction(response) {
    return {
        type: CONSTANTS.FETCHING_LIST_REPORT,
        payload: response
    }
}
export function fetchingLoadingAction() {
    return {
        type: CONSTANTS.FETCHING_LIST_REPORT_LOADING,
        payload: {}
    }
}