import { combineReducers } from 'redux';
import users, { usersSaga } from './users';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([usersSaga()]); // saga를 모두 통합
}

const rootReducer = combineReducers({ users });

export default rootReducer;
