import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {filters, pizzas} from './reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  filters,
  pizzas
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
  );



export default store;