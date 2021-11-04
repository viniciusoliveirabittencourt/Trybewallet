import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

const rootRedux = combineReducers({ user, wallet });

export default rootRedux;
