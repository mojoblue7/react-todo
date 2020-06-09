/**
 * 작성자: 이세희
 * 작성일: 2020.06.07
 * 파일명: index.js
 * 루트 리듀서
 *
 * 코드 수정 사항
 * 1. 2020.06.09 - rootSaga 제너레이터 추가
 */
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import sample, { sampleSaga } from './sample';
import loading from './loading';

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

// 1. 2020.06.09 - rootSaga 제너레이터 추가
export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐 주는 역할을 함
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
