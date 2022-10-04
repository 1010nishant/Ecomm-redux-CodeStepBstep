import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./Constant";


let initialState = [];
export const cartData = (currentState = initialState, action) => {
  // if(action.type === ADD_TO_CART){
  //     console.warn("ADD_TO_CART condtion ", action)

  //     // some logic
  //     return data
  // } else{
  //     return "no action called"
  // }

  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART condtion ", action);
      return [action.data, ...currentState];

    case REMOVE_FROM_CART:
        console.warn("REMOVE_FROM_CART condtion ", action);
        currentState.length = currentState.length ? currentState.length-1 : currentState
        return [...currentState];

    case EMPTY_CART:
        console.warn("REMOVE_FROM_CART condtion ", action);
        currentState = []
        return [...currentState];


    default:
      return currentState;
  }
};
