import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';
import Info from './Info/Info';

function App() {
  const [visible, setVisible] = useState('');

  return (
    <div>
      {/* <Counter></Counter> */}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}

export default App;
