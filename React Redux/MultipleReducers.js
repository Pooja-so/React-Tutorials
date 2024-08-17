// We will make different reducers for different actions in order to manage the state with ease.

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//------ importing redux-logger and required function for middleware ---------
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//* Step 1: Defining states for corresponding reducers
const initialCakeState = {
  numberOfCakes: 10,
};
const initialIceCreamState = {
  numberOfIceCreams: 20,
};

//* Step 2: Defining action creator

// Declaring action names
const BUY_CAKE = "BBUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Defining action creator (function that return actions)
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

//* Step 3: Defining reducers
// reducer(prevState, action) = newState
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberOfCakes: state.numberOfCakes - 1 };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numberOfIceCreams: state.numberOfIceCreams - 1 };
    default:
      return state;
  }
};

//* Step 4: Combining Reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// ------------ Applying Middleware --------------
//* Step 5: Creating Redux store
const store = createStore(rootReducer, applyMiddleware(logger));

//* Step 6:

console.log("Initial State: ", store.getState());

// 6.2: Subscribe the application with the store
const unsubcribe = store.subscribe(() =>
  console.log("\n Updated State: ", store.getState())
);

// 6.3: dispatch an action
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// 6.3 unsubcribe
unsubcribe();
