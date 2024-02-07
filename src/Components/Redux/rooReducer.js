import { combineReducers } from "redux";
import { userReducer } from "./Admin/reducer/reducer";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;