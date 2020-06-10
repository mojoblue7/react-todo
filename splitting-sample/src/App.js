import React, { Component, Suspense, useState } from 'react';
import logo from './logo.svg';
import loadable from '@loadable/component';
import './App.css';

// loadable 사용 부분
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>,
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload(); // 컴포넌트를 미리 불러옴
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          {/*onMouseOver시 컴포넌트를 미리 불러옴*/}
          Hello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
