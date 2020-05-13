import React from "react";
import "./index.scss";
import AsteroidPicture from "./containers/ApodHome";
import { Provider } from "react-redux";
import { store } from "./store";
export default function App() {
  return (
    <Provider store={store}>
      <AsteroidPicture />
    </Provider>
  );
}
