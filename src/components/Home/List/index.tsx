// == Imports

import React from 'react';

import './list.scss';

import { TList } from '../../../typings';

// == Component

type Props = {
  taskList: TList,
}

const List = ({ taskList }: Props) => {
  return (
      <main>
        <div className="list">
          {taskList.map((taskItem) => (
            <div className="task" key={taskItem.id}>
              <p>{taskItem.task}</p>
            </div>
          ))}
        </div>
      </main>
  );
}

// == Export

export default List;
