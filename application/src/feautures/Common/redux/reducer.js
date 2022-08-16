import * as CONSTANTS from './constants'
import initState from './initState';

export function reducer(state = initState, action) {
    const payload = action.payload
    switch (action.type) {
        case CONSTANTS.TOGGLE_SIDE_MENU_ACTION:
            return {
                ...state,
                collapse: !payload
            }
        default:
            return state
    }
}