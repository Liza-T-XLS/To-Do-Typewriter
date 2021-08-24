// == Imports

import React, { FC } from 'react';

import './app.scss';

import Header from '../Header';
import Home from '../Home';

// == Component

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

// == Export

export default App;
