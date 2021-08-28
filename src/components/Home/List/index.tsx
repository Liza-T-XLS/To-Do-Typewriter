// == Imports

import React from 'react';

import './list.scss';

import { TList, ITaskManager } from '../../../typings';

import Task from '../Task';

// == Component

type Props = {
  taskList: TList,
  taskManager: ITaskManager,
}

const List = ({ taskList, taskManager }: Props) => {
  return (
    <div className="list">
      {taskList.map((taskItem) => (
        <Task task={taskItem} taskManager={taskManager} key={taskItem.id} />
      ))}
    </div>
  );
}

// == Export

export default List;
