const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//* 1. An action is a object that describes what happened.
// It has type property that has string constants. Name of action
//const buycakeaction = {
//   type: BUY_CAKE,
// }

//* An action creator is a function that returns an action
const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};
//* 2. state is a single object that represents the sate
const initialState = {
  numberOfCakes: 10,
  numberOfIceCreams: 20,
};

//* 3. Reducers are pure function that takes initialState and action as parameter and returns the new state as object.
// It modifies the sate depending on the action type. It is better to copy the state by using spread operator and then to modify the state because  WE MUST NOT MUTATE the State
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberOfCakes: state.numberOfCakes - 1 };
    case BUY_ICECREAM:
      return { ...state, numberOfIceCreams: state.numberOfIceCreams - 1 };
    default:
      return state;
  }
};

//* 4. Redux store: It store the state of the entire application
const store = createStore(reducer);

console.log("Initial state:", store.getState());

const unSubscribe = store.subscribe(() =>
  console.log("Updated State: ", store.getState())
);
//* Only write dispatch(actionCreator) after subscribing the application with the store
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unSubscribe();
