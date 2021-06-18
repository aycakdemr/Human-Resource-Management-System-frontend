import { combineReducers } from "redux";
import favAdvertReducer from "./reducers/favAdvertReducer";

const rootReducer = combineReducers({
    favlist : favAdvertReducer
   
})

export default rootReducer;
