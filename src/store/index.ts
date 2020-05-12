import { createStore, applyMiddleware } from "redux";
import { RootReducers } from "./reducers";
import createSagaMiddleWare from "redux-saga";
import { rootSaga } from "./sagas";
const sagaMiddleWare = createSagaMiddleWare();
export const store = createStore(RootReducers, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);
