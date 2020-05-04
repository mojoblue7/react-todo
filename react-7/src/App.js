import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPracticeFunc from './EventPracticeFunc';
import ValidationSample from './validationSample/ValidationSample';
import RefSample from './RefSample/RefSample';
import ScrollBox from './ScrollBox/ScrollBox';
import IterationSample from './IterationSample/IterationSample';
import LifeCycleSample from './LifeCycleSample/LifeCycleSample';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div className='App'>
        {/* <MyComponent name="React" favoriteNumber={1}>
        리액트s
      </MyComponent> */}
        {/* <Counter></Counter> */}
        {/* <Say></Say> */}
        {/* <EventPractice></EventPractice> */}
        {/* <EventPracticeFunc></EventPracticeFunc> */}
        {/* <ValidationSample /> */}
        {/* <RefSample></RefSample> */}
        {/* <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button> */}
        {/* <IterationSample /> */}
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
        <button onClick={this.handleClick}>랜덤 색상</button>
      </div>
    );
  }
}

export default App;
