import React from 'react';

import ReactDOM from 'react-dom';

import store from '_redux/store';

import { Provider } from 'react-redux';

import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

import App from './App';

ReactDOM.render(
  (
    <RenderAfterNavermapsLoaded
      ncpClientId={process.env.REACT_APP_MAP_CLIENT_ID}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </RenderAfterNavermapsLoaded>

  ),
  document.getElementById('app'),
);
