import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {thunk} from 'redux-thunk'
//import cakeReducer from './cake/cakeReducer'
import { rootReducer } from "./rootReducer";
//import { countReducer } from './Counter/counterReducer';


//const store = createStore(cakeReducer);

//const store = createStore(countReducer)
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;