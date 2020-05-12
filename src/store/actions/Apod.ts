import * as ApodConstants from "../constants/Apod";
export const getApod = (payload: NASAStore.getAPODRequest) => ({
  type: ApodConstants.GETTING_APOD,
  payload,
});
export const getApodSuccess = (payload) => ({
  type: ApodConstants.GETTING_APOD_SUCCESS,
  payload,
});
export const getApodFAILURE = (error) => ({
  type: ApodConstants.GETTING_APOD_FAILURE,
  error,
});
