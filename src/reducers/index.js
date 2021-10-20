import changeNumber from "./todo";
import PRODUCTSINGLE from "./single";
import cartReducer from "./cartReducer";

import {combineReducers} from "redux";
 
const rootReducer = combineReducers({
    changeNumber,
    cartReducer,
    PRODUCTSINGLE
})

export default rootReducer;