// == Imports

import React, { ChangeEvent, FormEvent, useState } from 'react';

import './home.scss';

import List from './List';
import Bin from './Bin';

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
      desc: task,
      active: true,
    };
    const newTaskList = [
      ...taskList,
      newTask,
    ];
    setTaskList(newTaskList);
    setTask('');
  };

  const taskManager = (taskId: number): void => {
    const newTaskList = taskList.map(taskItem => taskItem.id === taskId ? {
      ...taskItem,
      active: !taskItem.active,
    }: taskItem);
    setTaskList(newTaskList);
  };

  const list = taskList.filter(taskItem => taskItem.active === true);
  const bin = taskList.filter(taskItem => taskItem.active === false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (task.trim().length > 0) {
      addTask(task);
    }
  }

  return (
      <main>
        <div className="home">
            <form className="taskForm" onSubmit={onSubmitHandler}>
              <label htmlFor="taskInput">Enter a task</label>
              <input type="text" id="taskInput" name="taskInput" placeholder="Just do it" value={task} onChange={onChangeHandler} />
            </form>
          <List taskList={list} taskManager={taskManager} />
          <Bin taskList={bin} taskManager={taskManager} />
        </div>
      </main>
  );
}

// == Export

export default Home;
