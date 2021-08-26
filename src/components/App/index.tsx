// == Imports

import React from 'react';

import './app.scss';

import Header from '../Header';
import Home from '../Home';

// == Component

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

// == Export

export default App;
