// == Imports

import React, { MouseEvent } from 'react';
import classNames from 'classnames';

import './task.scss';

import { ITask, ITaskManager } from '../../../typings';

import removeIcon from '../../../images/remove.svg';
import restoreIcon from '../../../images/restore.svg';

// == Component

type Props = {
  task: ITask,
  taskManager: ITaskManager,
}

const Task = ({ task, taskManager }: Props) => {
  const taskClassName = classNames('task', { inactive: !task.active });

  const icon = task.active ? removeIcon : restoreIcon;
  const alt = task.active ? "remove icon" : "restore icon";
  const title = task.active ? "remove task" : "restore task";

  const actionOnClickHandler = (event: MouseEvent<HTMLImageElement>) : void => {
    const target = event.target as HTMLImageElement;
    if (target.parentElement) {
      taskManager(parseInt(target.parentElement.id));
    }
  };

  return (
    <div id={task.id.toString()} className={taskClassName}>
      <p className="taskDesc">{task.desc}</p>
      <img className="actionIcon" src={icon} alt={alt} title={title} onClick={actionOnClickHandler} />
    </div>
  );
}

// == Export

export default Task;
