// == Imports

import React from 'react';

import './app.scss';

import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';

// == Component

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

// == Export

export default App;
