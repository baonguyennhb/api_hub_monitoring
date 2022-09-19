import { combineReducers } from "redux";
import { reducer as PlantReducer  } from "../feautures/Home/redux/reducer";
import { reducer as ReportReducer } from "../feautures/ViewReport/redux/reducer";
import {reducer as Device } from "../feautures/Devices/redux/reducer"
import { reducer as ApiSources } from "../feautures/ApiSource/redux/reducer";
import { reducer as ConfigReport } from "../feautures/ConfigReport/redux/reducer";
import { reducer as Tag } from "../feautures/Tag/redux/reducer"
import { reducer as Auth } from "../feautures/Auth/redux/reducer";
import { reducer as Common} from "../feautures/Common/redux/reducer";
import { reducer as DataHub } from "../feautures/DataHub/redux/reducer";
import { reducer as PushManual} from "../feautures/ManualPush/redux/reducer";
const rootReducer = combineReducers({
    common: Common,
    auth: Auth,
    plant: PlantReducer,
    report: ReportReducer,
    device: Device,
    apiSource: ApiSources,
    configReport: ConfigReport,
    tag: Tag,
    data_hub: DataHub,
    push_manual: PushManual
})

export default rootReducer
