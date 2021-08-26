// == Imports

import React, { MouseEvent } from 'react';

import './task.scss';

import { ITask, IRemoveTask } from '../../../../typings';

import removeIcon from '../../../../images/remove.svg';

// == Component

type Props = {
  task: ITask,
  removeTask: IRemoveTask,
}

const Task = ({ task, removeTask }: Props) => {
  const removeOnClickHandler = (event: MouseEvent<HTMLImageElement>) : void => {
    const target = event.target as HTMLImageElement;
    if (target.parentElement) {
      removeTask(parseInt(target.parentElement.id));
    }
  };

  return (
    <div id={task.id.toString()} className="task">
      <p className="taskDesc">{task.desc}</p>
      <img className="remove" src={removeIcon} alt="remove icon" title="remove task" onClick={removeOnClickHandler} />
    </div>
  );
}

// == Export

export default Task;
