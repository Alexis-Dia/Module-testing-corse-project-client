import { combineReducers } from 'redux'
import locationReducer from './location'
import loginReducer from '../api/login/loginReducer'
import flashReducer from "../api/flash/flashReducer";


export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    auth: loginReducer,
    flashMessages: flashReducer,
    ...asyncReducers
  })
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers))
};

export default makeRootReducer
