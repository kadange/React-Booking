import {createStore, applyMiddleware} from 'redux';
import allReducer from '../reducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  allReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;