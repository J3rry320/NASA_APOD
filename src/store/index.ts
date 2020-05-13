import { createStore, applyMiddleware } from "redux";
import { RootReducers } from "./reducers";
import createSagaMiddleWare from "redux-saga";
import { rootSaga } from "./sagas";
import { logger } from "../utils/logger";
const sagaMiddleWare = createSagaMiddleWare();
export const store = createStore(
  RootReducers,
  applyMiddleware(sagaMiddleWare, logger)
);
sagaMiddleWare.run(rootSaga);
