import { combineReducers } from "redux";
import { reducer as PlantReducer  } from "../feautures/Home/redux/reducer";
import { reducer as ReportReducer } from "../feautures/ViewReport/redux/reducer";
import {reducer as Device } from "../feautures/Devices/redux/reducer"
import { reducer as ApiSources } from "../feautures/ApiSource/redux/reducer";
import { reducer as ConfigReport } from "../feautures/ConfigReport/redux/reducer";
import { reducer as Tag } from "../feautures/Tag/redux/reducer"
import { reducer as Auth } from "../feautures/Auth/redux/reducer";
const rootReducer = combineReducers({
    auth: Auth,
    plant: PlantReducer,
    report: ReportReducer,
    device: Device,
    apiSource: ApiSources,
    configReport: ConfigReport,
    tag: Tag
})

export default rootReducer
