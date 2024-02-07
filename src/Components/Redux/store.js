import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from "./rooReducer";
import {rootSaga} from "./Saga/index"
// import logger from "redux-logger" //

const SagaMiddleware = createSagaMiddleware();


const Store = createStore(
  rootReducer,
  applyMiddleware(SagaMiddleware)
);

SagaMiddleware.run(rootSaga);

export default Store;