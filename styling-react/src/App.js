import React from 'react';
import logo from './logo.svg';
import './App.css';
import SassComponent from './SassComponent/SassComponent';
import CSSModule from './CSSModule';
import StyledComponent from './StyledComponent/StyledComponent';
import MyComponent from './StyledComponent/MyComponent';

function App() {
  return (
    // <div className='App'>
    //   <header className='App-header'>
    //     <img src={logo} className='App logo' alt='logo' />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className='App-link'
    //       href='https://reactjs.org'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>
    //   {/* <SassComponent /> */}
    //   <CSSModule />
    // </div>
    <div>
      <StyledComponent />
    </div>
  );
}

export default App;
