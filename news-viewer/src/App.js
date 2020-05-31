import React, { useState, useCallback } from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './components/NewPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
