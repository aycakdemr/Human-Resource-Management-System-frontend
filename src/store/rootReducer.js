import { combineReducers } from "redux";
import cityReducer from "./reducers/cityReducer";
import favAdvertReducer from "./reducers/favAdvertReducer";
import wayOfWorkingReducer from "./reducers/wayOfWorkingReducer";

const rootReducer = combineReducers({
    favlist : favAdvertReducer,
    citylist : cityReducer,
    wayOfWorking : wayOfWorkingReducer
})

export default rootReducer;
