import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './rootReducers';
import { initialState as todos } from './todoReducers';
import { initialState as users } from './userReducers';
import { router as routing } from './rootReducers';

const middlewares = [thunk];
let devToolsExtension = (f: any) => f;
let state = {
  // name: 'santiiny',
  // address: '海淀',
  todos,
  users,
  routing,
};

declare var window: any;
if (process.env.NODE_ENV === 'dev') {
  const createLogger = require('redux-logger');
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);

  if (window.devToolsExtension) {
    devToolsExtension = window.devToolsExtension();
  }
}

export default (initialState = state) => {
  // compose 组合中间件
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(...middlewares),
    devToolsExtension,
  ));
  return store;
};