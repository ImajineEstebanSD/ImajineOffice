import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMe } from '../redux/actions';

function Logout() {
  const { user, token } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getMe(token));
      console.log('ejecutando useEffect');
    } catch (error) {
      console.error(error);
    }
  }, [token]);
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div className='border border-success border-5 p-3 mb-5'>You logged in successfully!!</div>
      <div>
        <h4>My Profile</h4>
        <p>Name: {user.name}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
}

export default Logout;
