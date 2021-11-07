import {combineReducers} from 'redux';

//Reducers
import app from './app';
import auth from './auth';


const rootReducer = combineReducers({
    app,
    auth
})

export default rootReducer;