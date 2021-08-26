// == Imports

import React from 'react';

import './list.scss';

import { TList } from '../../../typings';

import Task from './Task';

// == Component

type Props = {
  taskList: TList,
}

const List = ({ taskList }: Props) => {
  return (
    <div className="list">
      {taskList.map((taskItem) => (
        <Task task={taskItem} key={taskItem.id} />
      ))}
    </div>
  );
}

// == Export

export default List;
