import { NASAStore } from "../typings";

export const logger = (store: any) => (next: any) => (action: any) => {
  next(action);
  console.log(action);
};
