import axios from 'axios'
import * as CONSTANTS from './constants'

export function fetchingTableTag() {
    return dispatch => {
        dispatch(fetchingLoadingAction)
        axios.get('http://localhost:4000/api/v1/tag/list')
            .then(res => {
                console.log(res)
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