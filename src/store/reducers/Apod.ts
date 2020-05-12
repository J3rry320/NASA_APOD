import * as ApodConstants from "../constants/Apod";

const INIT_STATE: NASAStore.IAPODReducers = {
  pictureData: null,
  error: null,
  loading: null,
};
export default function Apod(state = INIT_STATE, action) {
  const { payload, error, type } = action;
  switch (type) {
    case ApodConstants.GETTING_APOD: {
      return {
        ...state,
        loading: true,
      };
    }
    case ApodConstants.GETTING_APOD_SUCCESS: {
      return {
        ...state,
        loading: false,
        pictureData: payload,
      };
    }
    case ApodConstants.GETTING_APOD_FAILURE: {
      return {
        ...state,
        loading: false,
        error,
      };
    }
    default: {
      return state;
    }
  }
}
