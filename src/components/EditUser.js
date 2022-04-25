import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import { useParams } from 'react-router-dom';
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
    history.push('/');
  };

  const updateUser = async (user, id) => {
    await editUser(id, user);
  }

  return (
    <div>
      <UserForm user={userToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditUser;
