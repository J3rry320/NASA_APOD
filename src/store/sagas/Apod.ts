import { call, put, takeLatest } from "redux-saga/effects";
import { getRequest } from "../../utils/NetworkRequest";
import { API_APOD } from "../../utils/url";
import * as ApodConstants from "../constants/Apod";

function* getAPOD(params: any) {
  try {
    const { date, hd } = params.payload;

    const payload = yield call(
      getRequest,
      API_APOD(process.env.API_KEY, date, hd)
    );

    yield put({ type: ApodConstants.GETTING_APOD_SUCCESS, payload });
  } catch (error) {
    yield put({ type: ApodConstants.GETTING_APOD_FAILURE, error });
  }
}
export function* rootAPODSaga() {
  yield takeLatest(ApodConstants.GETTING_APOD, getAPOD);
}
