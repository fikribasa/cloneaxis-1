import {combineReducers} from 'redux';
import user from './user';
import notification from './notification';
import transaction from './transaction';

const reducers = combineReducers({
  user,
  notification,
  transaction,
});

export default reducers;
