// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
const initialState = {
  messages: [
    // {
    //   "author":"anonymous92",
    //   "content":"Hello world!",
    //   "created_at":"2017-09-26T23:03:16.365Z"
    // },
    // {
    //   "author":"anonymous92",
    //   "content":"Hello world!",
    //   "created_at":"2018-09-26T23:03:16.365Z"
    // },
    // {
    //   "author":"anonymous92",
    //   "content":"Hello world!",
    //   "created_at":"2019-09-26T23:03:16.365Z"
    // },
    // {
    //   "author":"anonymous92",
    //   "content":"Hello world!",
    //   "created_at":"2010-09-26T23:03:16.365Z"
    // },
    // {
    //   "author":"anonymous92",
    //   "content":"Hello world!",
    //   "created_at":"2011-09-26T23:03:16.365Z"
    // },
    // {
    //   "author":"anonymous92",
    //   "content":"Hello world!",
    //   "created_at":"2012-09-26T23:03:16.365Z"
    // },
    // {
    //   "author":"anonymous92",
    //   "content":"Hello world!",
    //   "created_at":"2013-09-26T23:03:16.365Z"
    // },
    // {
    //   "author":"anonymous92",
    //   "content":"Hello world!",
    //   "created_at":"2014-09-26T23:03:16.365Z"
    // },
    // {
    //   "author":"anonymous92",
    //   "content":"Hello world!",
    //   "created_at":"2015-09-26T23:03:16.365Z"
    // },
    // {
    //   "author":"anonymous92",
    //   "content":"Hello world!",
    //   "created_at":"2016-09-26T23:03:16.365Z"
    // }
  ],
  channels: ["general", "react", "paris"],
  selectedChannel: "general",
  currentUser: prompt("What's your username?")
};

import messagesReducer from "./reducers/messages_reducer"
import selectedChannelReducer from "./reducers/selected_channel_reducer"
import channelsReducer from "./reducers/channels_reducer"
import currentUserReducer from "./reducers/current_user_reducer"

const reducers = combineReducers({
  messages: messagesReducer,
  selectedChannel: selectedChannelReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
