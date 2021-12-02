import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./redux";
import { Route } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
        <Route path="/">
            <App />

        </Route>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
