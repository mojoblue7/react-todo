/**
 * 작성자: 이세희
 * 작성일: 2020.06.07
 * 파일명: counter.js
 * counter 상태를 유지하기 위한 리덕스 모듈
 *
 * 코드 수정 사항 :
 * 2020.06.09 - redux-saga 코드 추가
 */

import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록
// () => undefined를 두 번째 파라미터로 넣어 줌.
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000); // 1초를 기다림
  yield put(increase()); // 특정 액션을 디스패치함.
}

function* decreaseSaga() {
  yield delay(1000); // 1초를 기다림
  yield put(decrease()); // 특정 액션을 디스패치함.
}

export function* counterSaga() {
  // takeEvery는 들어오는 모든 액션에 대해 특적 작업을 처리해 줌.
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고
  // 가장 마지막으로 싱행된 작업만 수행
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0; //  상태는 객체일 필요가 없음

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
