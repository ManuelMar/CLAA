import 'materialize-css/dist/css/materialize.min.css';
import reduxThunk from 'redux-thunk';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'; // make reducers available
import axios from 'axios'; // DEBUGGING SETUP TRICK IMPORTANT  for testing back end
window.axios = axios; // for debugging can post with auth!!
// neat trick^^^^^

//dummy reducer () => {}
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//index js query select
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
