// == Imports

import React from 'react';
import PropTypes from 'prop-types';

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

// == PropTypes

Bin.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
  taskManager: PropTypes.func.isRequired,
}

// == Export

export default Bin;
