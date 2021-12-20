import { combineReducers } from "redux";
import warehousesReducer from "./warehouses/reducers";

const rootReducer = combineReducers({
  warehouses: warehousesReducer,
});

export default rootReducer;
