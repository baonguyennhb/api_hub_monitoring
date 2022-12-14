import * as CONSTANTS from './constants'
import initState from './initState'

export function reducer(state = initState, action) {
    let payload = action.payload
    switch (action.type) {
        case CONSTANTS.FETCHING_DETAIL_DATAHUB:
            return {
                ...state,
                detail: {
                    data: payload.data.data,
                    loading: false
                }
            }
        case CONSTANTS.FETCHING_DETAIL_DATAHUB_LOADING:
            return {
                ...state,
                detail: {
                    ...state.detail,
                    loading: true
                }
            }
        case CONSTANTS.FETCHING_LIST_TAG_DATAHUB:
            let data = payload.data !== undefined ? payload.data : []
            return {
                ...state,
                tags: {
                    data: data.data,
                    loading: false
                }
            }
        case CONSTANTS.FETCHING_LIST_TAG_DATAHUB_LOADING:
            return {
                ...state,
                tags: {
                    ...state.tags,
                    loading: true
                }
            }
        case CONSTANTS.ADD_TAG:
            return {
                ...state,
                addTag: {
                    data: payload.data,
                    loading: false
                },
                reload: true
            }
        case CONSTANTS.ADD_TAG_LOADING:
            return {
                ...state,
                addTag: {
                    ...state.addTag,
                    loading: true
                },
                reload: false
            }
        case CONSTANTS.REMOVE_TAG:
            return {
                ...state,
                delete: {
                    ...state.delete,
                    error: payload.error,
                    data: payload.data
                },
                reload: true
            }
        case CONSTANTS.REMOVE_TAG_LOADING:
            return {
                ...state,
                delete: {
                    ...state.delete,
                    error: {},
                    data: {}
                },
                reload: false
            }
        case CONSTANTS.DELETE_TAG_CONFIG:
            return {
                ...state,
                deleteConfig: {
                    ...state.deleteConfig,
                    error: payload.error,
                    data: payload.data
                },
                reload: true
            }
        case CONSTANTS.DELETE_TAG_CONFIG_LOADING:
            return {
                ...state,
                deleteConfig: {
                    ...state.deleteConfig,
                    error: {},
                    data: {}
                },
                reload: false
            }
        case CONSTANTS.DOWNLOAD_CONFIG:
            return {
                ...state,
                download: {
                    ...state.download,
                    error: payload.error,
                    data: payload.data,
                    loading: false
                },
            }
        case CONSTANTS.DOWNLOAD_CONFIG_LOADING:
            return {
                ...state,
                download: {
                    ...state.download,
                    error: {},
                    data: {},
                    loading: true
                },
            }
        case CONSTANTS.CONNECT_DATA_HUB:
            return {
                ...state,
                connect: {
                    ...state.connect,
                    data: payload.message,
                    loading: false
                }
            }
        case CONSTANTS.CONNECT_DATA_HUB_LOADING:
            return {
                ...state,
                connect: {
                    ...state.connect,
                    data: {},
                    loading: true
                }
            }
        case CONSTANTS.DISCONNECT_DATA_HUB:
            return {
                ...state,
                disconnect: {
                    ...state.disconnect,
                    data: payload.message,
                    loading: false
                }
            }
        case CONSTANTS.DISCONNECT_DATA_HUB_LOADING:
            return {
                ...state,
                disconnect: {
                    ...state.disconnect,
                    data: {},
                    loading: true
                }
            }
        case CONSTANTS.FECHING_CONNECT_DATA_HUB:
            return {
                ...state,
                status: {
                    ...state.status,
                    data: payload.data,
                }
            }
        default:
            return state
    }
}