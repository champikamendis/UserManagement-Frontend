import React from 'react';
import UserForm from './UserForm';

import { addUser } from '../api/api';

const AddUser = ({ history }) => {
  const handleOnSubmit = (user) => {
    saveUser(user);
  };

  const saveUser = async user => {
    try {
      const response =  await addUser(user);
      console.info(response);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <React.Fragment>
      <UserForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddUser;
