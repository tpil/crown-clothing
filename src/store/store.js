import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

//Custom middlewares
const  loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currentState: ', store.getState());

  next(action);

  console.log('next state:', store.getState());
}

//Middlewares
const middlewares = [loggerMiddleWare];
const composeEnhancers = compose(applyMiddleware(...middlewares));

//root-reducer
export const store = createStore(rootReducer, undefined, composeEnhancers);

