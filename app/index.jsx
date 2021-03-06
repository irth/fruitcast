import io from 'socket.io-client';
const socket = io.connect();

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers';

const store = createStore(reducers);

// Allow for the server to dispatch actions.
// All the state is updated by the server, the client just presents it.
socket.on('dispatch', action => store.dispatch(action));

import App from './components/App';

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('app'),
);
