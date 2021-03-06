import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthOrApp from './main/AuthOrApp';
import * as serviceWorker from './serviceWorker';

import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './main/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(multi, thunk, promise)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthOrApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
