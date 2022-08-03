import * as CONSTANTS  from './constants'
import axios from 'axios'
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