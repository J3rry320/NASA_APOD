import { all, fork } from "redux-saga/effects";
import { rootAPODSaga } from "./Apod";
export function* rootSaga() {
  yield all([fork(rootAPODSaga)]);
}
