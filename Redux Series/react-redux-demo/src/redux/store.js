import { createStore } from "redux";

// Import 2 things for applying middleware
import { applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
