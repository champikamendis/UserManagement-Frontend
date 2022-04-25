import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import UserForm from './UserForm';
import { editUser, getAllUsers } from '../api/api';


const EditUser = ({ history }) => {
  const [userList, setUserList] = useState([]);
  const { id } = useParams();
  const userToEdit = userList.find((user) => user.id === id);

  useEffect(() => {
    const fetchAllUsers = async() => {
      const users = await getAllUsers()
      setUserList(users);
    }
    fetchAllUsers();
  }, [])
  

  const handleOnSubmit = (user) => {
    updateUser(user, id);
  };

  const updateUser = async (user, id) => {
    await editUser(id, user);
    history.push('/');
  }

  return (
    <div>
      <UserForm user={userToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditUser;
