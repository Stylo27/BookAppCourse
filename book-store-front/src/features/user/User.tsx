import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { logoutUser } from './userSlice';

export default function User(): any {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(logoutUser('123'));
  }
  return(
    <>
      <button onClick={handleClick}>Logout</button>
    </>
  )
}