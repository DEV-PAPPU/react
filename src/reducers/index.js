import changeNumber from "./todo";
import PRODUCTSINGLE from "./single";

import {combineReducers} from "redux";
 
const rootReducer = combineReducers({
    changeNumber,
    PRODUCTSINGLE
})

export default rootReducer;