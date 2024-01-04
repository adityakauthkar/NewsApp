/* eslint-disable prettier/prettier */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer/reducer';
import promiseMiddleware from './middleware/apiCalls';

let middleware = [thunk, promiseMiddleware];

const reduxStore =  createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
    )
);

export default reduxStore;

