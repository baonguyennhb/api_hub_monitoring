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
        default:
            return state
    }
}