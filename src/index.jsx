import React from 'react';

import ReactDOM from 'react-dom';

import store from '_redux/store';

import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
