import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WhatToWatch from './WhatToWatch';
import * as serviceWorker from './serviceWorker';

import 'jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'popper.js/dist/popper.min'
import {Provider} from "react-redux";
import watchlistReducer from "./reducers/watchlistReducer";
import {combineReducers, createStore} from "redux";
import mediumReducer from "./reducers/mediumReducer";
import userReducer from "./reducers/userReducer";

const reducers = combineReducers({
    watchlistReducer, mediumReducer, userReducer
});

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <WhatToWatch />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
