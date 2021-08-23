// == Imports

import React, { FC, ChangeEvent, useState } from 'react';

import './home.scss';

import List from './List';

import { TList } from '../../typings';

// == Component

type Props = TList;

const Home: FC<Props> = ({ taskList }) => {
  const [task, setTask] = useState<string>("");

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  return (
      <main>
        <div className="home">
          <div className="taskInputContainer">
            <label htmlFor="taskInput">Enter a task</label>
            <input type="text" id="taskInput" name="taskInput" value={task} onChange={onChangeHandler}/>
          </div>
          <List taskList={taskList} />
        </div>
      </main>
  );
}

// == Export

export default Home;
