/**
 * 작성자: 이세희
 * 작성일: 2020.06.07
 * 파일명: Counter.js
 * 프레젠테이셔널 컴포넌트
 * Counter의 html 코드를 구현
 */
import React from 'react';

const Counter = ({ onIncrease, onDecrease, number }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
