import {combineReducers} from 'redux';
import user from './user';
import notification from './notification';
import axispackage from './axispackage';
import internet from './package/internet';
import newBoostr from './package/newBoostr';
import teleponDanSms from './package/teleponDanSms';
import roaming from './package/roaming';
import transactions from './transactions';

const reducers = combineReducers({
  user,
  notification,
  axispackage,
  internet,
  newBoostr,
  teleponDanSms,
  roaming,
  transactions
});

export default reducers;
