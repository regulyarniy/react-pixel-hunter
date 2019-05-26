import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sass/style.scss";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducer from "./store";

const middleware = applyMiddleware(thunk);
const store = createStore(appReducer, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(`app`)
);
