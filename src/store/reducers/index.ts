import { combineReducers } from "redux";
import Apod from "./Apod";

export const RootReducers = combineReducers<NASAStore.IRootReducers>({
  Apod,
});
