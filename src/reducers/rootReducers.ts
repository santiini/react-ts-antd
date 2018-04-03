import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// reducer 的导出和导入的方式：尽量不要用 export default 导出
import { todoReducers } from './todoReducers';
import { userReducers } from './userReducers';
import commonReducers from './commonState';
import { User, Todo } from './model';

export interface State {
  routing: any;
  todos: Array<Todo>;
  Users: Array<User>;
  common: any;
}

const rootReducers = combineReducers({
  routing: routerReducer,
  todos: todoReducers,
  users: userReducers,
  common: commonReducers,
});

export const router = routerReducer;
export default rootReducers;