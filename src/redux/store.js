import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {filters, pizzas, cart} from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  filters,
  pizzas,
  cart
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  );



export default store;