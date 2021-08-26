// == Imports

import React, { MouseEvent } from 'react';

import './task.scss';

import { TTask } from '../../../../typings';

import removeIcon from '../../../../images/remove.svg';

// == Component

type Props = {
  task: TTask,
}

const removeOnClickHandler = (event: MouseEvent<HTMLImageElement>) : void => {
  console.log(event);
};

const Task = ({ task }: Props) => {
  return (
    <div className="task">
      <p className="taskDesc">{task.desc}</p>
      <img className="remove" src={removeIcon} alt="remove icon" title="remove task" onClick={removeOnClickHandler} />
    </div>
  );
}

// == Export

export default Task;
