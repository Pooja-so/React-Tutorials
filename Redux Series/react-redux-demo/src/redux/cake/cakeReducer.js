// import necessary ActionTypes
import { BUY_CAKE } from "./cakeTypes";

// Step 1: Define initailState
const initailState = {
  numOfCakes: 11,
};

// Step 2: Define reducer function: (previousState, action) = newState
const cakeReducer = (state = initailState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// Step 3: export reducer function
export default cakeReducer;
