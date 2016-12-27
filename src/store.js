//import dependencies
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';
import promise from 'redux-promise-middleware';

// import middleware
import {error} from './Middleware/middleware'
// import reducers
import todoReducers from './Reducers/index'

//// imports end
const middleware = applyMiddleware(logger(), error, thunk, promise());
// const store = createStore(todoReducers, {}, middleware);

export default createStore(todoReducers, middleware)
