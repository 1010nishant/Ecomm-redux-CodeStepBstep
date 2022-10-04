import { combineReducers } from "redux"
import { cartData } from "./Reducer"
import { productData } from "./ProductReducer"
export default combineReducers({
    cartData,
    productData,
})