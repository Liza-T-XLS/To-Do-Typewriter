// == Imports

import React from 'react';

import './list.scss';

import { TList, IRemoveTask } from '../../../typings';

import Task from './Task';

// == Component

type Props = {
  taskList: TList,
  removeTask: IRemoveTask,
}

const List = ({ taskList, removeTask }: Props) => {
  return (
    <div className="list">
      {taskList.map((taskItem) => (
        <Task task={taskItem} removeTask={removeTask} key={taskItem.id} />
      ))}
    </div>
  );
}

// == Export

export default List;
