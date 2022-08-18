import * as CONSTANTS from './constants'
import initState from './initState'

export function reducer(state = initState, action) {
    let payload = action.payload
    switch (action.type) {
        case CONSTANTS.FETCHING_LIST_TAG:
            let data = payload.data !== undefined ? payload.data : []
            return {
                ...state,
                list: {
                    data: data.data,
                    loading: false
                }
            }
        case CONSTANTS.FETCHING_LIST_TAG_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true
                }
            }
        case CONSTANTS.CREATE_TAG:
            return {
                ...state,
                create: {
                    ...state.create,
                    error: payload.error,
                    data: payload.data,
                    loading: false
                },
                reload: true
            }
        case CONSTANTS.CREATE_TAG_LOADING:
            return {
                ...state,
                create: {
                    ...state.create,
                    error: {},
                    data: {},
                    loading: true
                },
                reload: false
            }
        case CONSTANTS.UPDATE_TAG: {
            return {
                ...state,
                update: {
                    ...state.update,
                    error: payload.error,
                    data: payload.data,
                    loading: false
                },
                reload: true
            }
        }
        case CONSTANTS.UPDATE_TAG_LOADING: {
            return {
                ...state,
                update: {
                    ...state.update,
                    error: {},
                    data: {},
                    loading: true
                },
                reload: false
            }
        }
        case CONSTANTS.DELETE_TAG:
            return {
                ...state,
                delete: {
                    ...state.delete,
                    error: payload.error,
                    data: payload.data
                },
                reload: true
            }
        case CONSTANTS.DELETE_TAG_LOADING:
            return {
                ...state,
                delete: {
                    ...state.delete,
                    error: {},
                    data: {}
                },
                reload: false
            }
        case CONSTANTS.FETCHING_MONITOR_TAG:
            let dataPayload = payload.data !== undefined ? payload.data : []
            return {
                ...state,
                monitor: {
                    data: dataPayload.data,
                    loading: false
                }
            }
        case CONSTANTS.FETCHING_MONITOR_TAG_LOADING:
            return {
                ...state,
                monitor: {
                    ...state.monitor,
                    loading: true
                }
            }
        case CONSTANTS.FETCHING_LOG_TAG:
            let dataPayloadLog = payload.data !== undefined ? payload.data : []
            return {
                ...state,
                log: {
                    data: dataPayloadLog.data,
                    loading: false
                }
            }
        case CONSTANTS.FETCHING_LOG_TAG_LOADING:
            return {
                ...state,
                log: {
                    ...state.log,
                    loading: true
                }
            }
        default:
            return state
    }
}