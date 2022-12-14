import * as CONSTANTS from './constants'
import initState from './initState'

export function reducer(state = initState, action) {
    let payload = action.payload
    switch (action.type) {
        case CONSTANTS.PUSH_MANUAL:
            return {
                ...state,
                push_manual: {
                    data: payload.data.data,
                    loading: false
                }
            }
        case CONSTANTS.PUSH_MANUAL_LOADING:
            return {
                ...state,
                push_manual: {
                    ...state.push_manual,
                    loading: true
                }
            }
        default:
            return state
    }
}