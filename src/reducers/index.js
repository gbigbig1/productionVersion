import { combineReducers } from 'redux';

import taskReducer from './taskReducer';
import filterReducer from './filterReducer';
import authReducer from "./authReducer";

const rootReducer = combineReducers({ taskReducer, filterReducer, authReducer});

export default rootReducer;
