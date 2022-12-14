import * as CONSTANTS from './constants'
import initState from './initState'

export function reducer(state = initState, action) {
    let payload = action.payload
    switch (action.type) {
        case CONSTANTS.FETCHING_LIST_DEVICE:
            let data = payload.data !== undefined ? payload.data : []
            return {
                ...state,
                list: {
                    data: data.data,
                    loading: false
                }
            }
        case CONSTANTS.FETCHING_LIST_DEVICE_LOADING:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true
                }
            }
        case CONSTANTS.FETCHING_LIST_ALL_DEVICE:
            let datas = payload.data !== undefined ? payload.data : []
            return {
                ...state,
                all: {
                    data: datas.data,
                    loading: false
                }
            }
        case CONSTANTS.FETCHING_LIST_ALL_DEVICE_LOADING:
            return {
                ...state,
                all: {
                    ...state.list,
                    loading: true
                }
            }
        case CONSTANTS.FETCHING_DETAIL_DEVICE:
            return {
                ...state,
                detail: {
                    data: payload.data.data[0],
                    loading: false
                }
            }
        case CONSTANTS.CREATE_DEVICE:
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
        case CONSTANTS.CREATE_DEVICE_LOADING:
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
        case CONSTANTS.UPDATE_DEVICE: {
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
        case CONSTANTS.UPDATE_DEVICE_LOADING: {
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
        case CONSTANTS.DELETE_DEVICE:
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
        case CONSTANTS.DELETE_DEVICE_LOADING:
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
        case CONSTANTS.RESET_TABLE_DEVICE:
            return {
                ...state,
                list: {
                    data: []
                }
            }
        default:
            return state
    }
}