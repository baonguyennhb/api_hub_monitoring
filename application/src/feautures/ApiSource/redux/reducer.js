import * as CONSTANTS from './constants'
import initState from './initState'

export function reducer(state = initState, action) {
    let payload = action.payload
    switch (action.type) {
        case CONSTANTS.FETCHING_LIST_APISOURCE:
            let data = payload.data !== undefined ? payload.data : []
            return {
                ...state,
                list: {
                    data: data.data,
                    loading: false
                }
            }
        case CONSTANTS.FETCHING_LIST_APISOURCE_LOADDING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true
                }
            }
        case CONSTANTS.FETCHING_DETAIL_APISOURCE:
            return {
                ...state,
                detail: {
                    data: payload.data.data[0],
                    loading: false
                }
            }
        case CONSTANTS.FETCHING_DETAIL_APISOURCE_LOADDING:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    loading: true
                }
            }
        case CONSTANTS.CREATE_APISOURCE:
            return {
                ...state,
                create: {
                    ...state.create,
                    error: payload.error,
                    data: payload.data,
                    loading: false,
                },
                reload: true
            }
        case CONSTANTS.CREATE_APISOURCE_LOADING:
            return {
                ...state,
                create: {
                    ...state.create,
                    error: {},
                    data: {},
                    loading: true,
                },
                reload: false
            }
        case CONSTANTS.UPDATE_APISOURCE: {
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
        case CONSTANTS.UPDATE_APISOURCE_LOADING: {
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
        case CONSTANTS.DELETE_APISOURCE:
            return {
                ...state,
                delete: {
                    ...state.delete,
                    error: payload.error,
                    data: payload.data,
                    loading: false,
                },
                reload: true
            }
        case CONSTANTS.DELETE_APISOURCE_LOADING:
            return {
                ...state,
                delete: {
                    ...state.delete,
                    data: {},
                    error: {},
                    loading: true,
                },
                reload: false
            }
        case CONSTANTS.TEST_CONNECT_APISOURCE:
            return {
                ...state,
                test: {
                    ...state.test,
                    data: payload.data
                }
            }
        default:
            return state
    }
}