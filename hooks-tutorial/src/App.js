import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';
import Info from './Info/Info';
import ReducerCounter from './ReducerCounter/ReducerCounter';
import Average from './Average/Average';

function App() {
  const [visible, setVisible] = useState('');

  return (
    <div>
      {/* <Counter></Counter> */}

      {/* Info Component Tutorial */}
      {/* <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />} */}

      {/* Counter useReducer Tutorial */}
      {/* <ReducerCounter /> */}

      {/* Info useReducer Tutorial */}
      <Info />
      {/* <Average /> */}
    </div>
  );
}

export default App;
