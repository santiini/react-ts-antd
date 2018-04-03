/**
 * reducer 的拆分: createReducer
 */
import { Action } from './model';

export default (initialState: object, handlers: object) => 
  (state = initialState, action: Action<AnimationPlaybackEvent>) => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
}