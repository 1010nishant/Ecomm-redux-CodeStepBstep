import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./Constant";


let initialState = [];
export const productData = (currentState = initialState, action) => {

  switch (action.type) {

    //this is commented
    // case PRODUCT_LIST:
    //   console.warn("PRODUCT_LIST condtion ", action);
    //   return [action.data];

    case SET_PRODUCT_LIST:
      console.warn("SETproductlist condtion ", action);
      return [...action.data];

    default:
      return currentState;
  }
};