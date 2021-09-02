// == Imports

import React from 'react';
import PropTypes from 'prop-types';

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

// == PropTypes

List.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
  taskManager: PropTypes.func.isRequired,
}

// == Export

export default List;
