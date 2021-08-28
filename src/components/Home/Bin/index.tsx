// == Imports

import React from 'react';

// import './list.scss';

import { TList, ITaskManager } from '../../../typings';

import Task from '../Task';

// == Component

type Props = {
  taskList: TList,
  taskManager: ITaskManager,
}

const Bin = ({ taskList, taskManager }: Props) => {
  return (
    <div className="bin">
      {taskList.map((taskItem) => (
        <Task task={taskItem} taskManager={taskManager} key={taskItem.id} />
      ))}
    </div>
  );
}

// == Export

export default Bin;
