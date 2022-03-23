import { combineReducers } from "redux";
import posts from './posts';
import auth from './login';

export default (combineReducers({ posts, auth }));