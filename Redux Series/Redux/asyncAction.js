const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const createStore = redux.createStore;

// -------middleware setup ---
const applyMiddleware = redux.applyMiddleware;

// ------------- axios ------------

//* Step 1: Defining states
const initialState = {
  loading: false,
  users: [],
  error: "",
};

//* Step 2: Defining action creator

// Declaring action names
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Defining action creator
function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}
function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}
function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}

//* Step 3: Defining reducers
// reducer(prevState, action) = newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

//* Step 4 Define async action creator
// An action creator returns an action but thunk middleware gives us the ability to return a function instead of an action object.
// Function doesn't needs to be pure. It can have async API calls and it can also dispacth an action

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log(response.data);
        const userIds = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(userIds));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

//* Step 5: Creating Redux store
//---------- aplly middleware ----------------
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

//* Step 6:
console.log("Initial State: ", store.getState());

// 6.2: Subscribe the application with the store
const unsubcribe = store.subscribe(() =>
  console.log("Updated State: ", store.getState())
);

// 6.3: dispatch an action
store.dispatch(fetchUsers());

// 6.4 unsubscribe
// unsubcribe();

// const redux = require("redux");
// const thunkMiddleware = require("redux-thunk").default;

// const reducer = (state = {}, action) => state;

// const store = redux.createStore(
//   reducer,
//   redux.applyMiddleware(thunkMiddleware)
// );

// console.log(typeof thunkMiddleware); // Should output "function"
