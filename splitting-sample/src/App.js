import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    SplitMe: null,
  };

  handleClick = async () => {
    const loadedModule = await import('./SplitMe');
    this.setState({
      SplitMe: loadedModule.default,
    });
  };
  // const onClick = () => {
  //   import('./notify').then((result) => result.default());
  //   // stage-3 단계의 dynamic import 문법 - webpack에서 지원
  // };

  render() {
    const { SplitMe } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p onClick={this.handleClick}>Hello React!</p>
          {SplitMe && <SplitMe />}
        </header>
      </div>
    );
  }
}

export default App;
