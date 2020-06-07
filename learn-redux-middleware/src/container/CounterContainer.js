/**
 * 작성자: 이세희
 * 작성일: 2020.06.07
 * 파일명: CounterContainer.js
 * 컨테이너 컴포넌트
 * Counter의 동작을 구현
 */

import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);
