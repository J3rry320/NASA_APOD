export declare module NASAStore {
  export type APODPayload = {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
  };
  export interface IAPODReducers {
    pictureData: APODPayload;
    error: Error;
    loading: boolean;
  }
  export interface IRootReducers {
    Apod: IAPODReducers;
  }
  export type getAPODRequest = {
    date: string;
    hd: boolean;
  };
}
