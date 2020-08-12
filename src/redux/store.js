import { createStore, combineReducers } from 'redux';
import {filters, pizzas} from './reducers';

const rootReducer = combineReducers({
  filters,
  pizzas
})

const store = createStore(rootReducer);



export default store;