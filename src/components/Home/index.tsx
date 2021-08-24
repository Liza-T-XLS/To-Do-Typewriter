// == Imports

import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import './home.scss';

import List from './List';

import { TList } from '../../typings';

// == Component

const Home = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<TList>([]);

  const addTask = (task: string): void => {
    // creating a new id for the new task
    const idArray = taskList.map((taskItem) => taskItem.id);
    let idMax = 0;
    if (idArray.length > 0) {
      idMax = Math.max(...idArray);
    };
    const newId = idMax + 1;

    const newTask = {
      id: newId,
      task: task,
    };
    const newTaskList = [
      ...taskList,
      newTask,
    ];
    setTaskList(newTaskList);
    setTask('');
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>): void => {
    if ((event.code === 'Enter' || event.code === 'NumpadEnter') && task.trim().length > 0) {
      addTask(task);
    }
  };

  return (
      <main>
        <div className="home">
          <div className="taskInputContainer">
            <label htmlFor="taskInput">Enter a task</label>
            <input type="text" id="taskInput" name="taskInput" value={task} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
          </div>
          <List taskList={taskList} />
        </div>
      </main>
  );
}

// == Export

export default Home;
