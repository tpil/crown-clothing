import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

//Middlewares
const middlewares = [logger];
const composeEnhancers = compose(applyMiddleware(...middlewares));

//root-reducer
export const store = createStore(rootReducer, undefined, composeEnhancers);

