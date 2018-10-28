import { combineReducers } from 'redux';

import {
    nav,
    home,
    user
} from '../actions';

const AppReducer = combineReducers({
    nav,
    home,
    user
});

export default AppReducer;