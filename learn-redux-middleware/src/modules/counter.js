/**
 * 작성자: 이세희
 * 작성일: 2020.06.07
 * 파일명: counter.js
 * counter 상태를 유지하기 위한 리덕스 모듈
 */

import React from 'react';
import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = 0; //  상태는 객체일 필요가 없음

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;