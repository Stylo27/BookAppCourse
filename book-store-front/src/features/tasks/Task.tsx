import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ITask, addTask, selectTasks } from './tasksSlice';

export default function Tasks(): any {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);

  const handleClick = () => {
    const task = {
      id: Math.random(),
      text: Math.random().toString(),
    } as ITask;
    dispatch(addTask(task));
  }
  return(
    <>
      <button onClick={handleClick}>Generate Task</button>
      {tasks.map((task) => {
        return(
          <>
            <div>ID: {task.id}</div>
            <div>Description: {task.text}</div>
          </>
        )
      })}
    </>
  )
}