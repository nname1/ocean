import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducer from '../reducer/reducer';
import thunk from 'redux-thunk';

let store = createStore(
    combineReducers({...reducer}),
    applyMiddleware(thunk)
);

export default store;