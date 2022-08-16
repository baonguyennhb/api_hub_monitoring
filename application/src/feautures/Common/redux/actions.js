import  * as CONSTANTS from './constants'

export function toggleSideMenu(collapse) {
    return dispatch => {
        dispatch(toggleAction(collapse))
    }
}

export function toggleAction(collapse) {
    return {
        type: CONSTANTS.TOGGLE_SIDE_MENU_ACTION,
        payload: collapse
    }
}