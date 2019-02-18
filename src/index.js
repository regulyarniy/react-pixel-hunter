import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/style.scss';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import appReducer from "./store";

const middleware = applyMiddleware(thunk, logger);
const store = createStore(appReducer, middleware);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`app`));
