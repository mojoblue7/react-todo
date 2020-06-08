/**
 * 작성자: 이세희
 * 작성일: 2020.06.07
 * 파일명: index.js
 * 루트 리듀서
 */
import { combineReducers } from 'redux';
import counter from './counter';
import sample from './sample';

const rootReducer = combineReducers({
  counter,
  sample,
});

export default rootReducer;
