// == Imports

import React, { FC, useState } from 'react';

import './app.scss';

import Header from '../Header';
import Home from '../Home';

// == Component

const App: FC = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="app">
      <Header />
      <Home taskList={taskList} />
    </div>
  );
}

// == Export

export default App;
