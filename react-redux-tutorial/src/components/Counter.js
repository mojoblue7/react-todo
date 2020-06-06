import React from 'react';

const btnStyle = {
  fontSize: '20px',
};

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{number}</h1>
      <div style={{ textAlign: 'center' }}>
        <button style={btnStyle} onClick={onIncrease}>
          +1
        </button>
        <button style={btnStyle} onClick={onDecrease}>
          -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
