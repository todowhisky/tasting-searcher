import React from 'react';
import logo from './logo.svg';

import ReviewListContainer from './Containers/ReviewListContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReviewListContainer />
      </header>
    </div>
  );
}

export default App;
