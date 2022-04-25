import React,{ useState, useEffect } from 'react';
import _ from 'lodash';
import User from './User';
import { deleteUser, getAllUsers } from '../api/api';

const UsersList = ({ history }) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async() => {
      const users = await getAllUsers()
      setUserList(users);

    }
    fetchAllUsers();
  }, [])

  const handleRemoveUser = (id) => {
    removeUser(id);
    history.push('/');
  };

  const removeUser = async id => {
    await deleteUser(id);
  }

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(userList) ? (
          userList.map((user) => (
            <User key={user.id} {...user} handleRemoveUser={handleRemoveUser} />
          ))
        ) : (
          <p className="message">No users available. Please add some users.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default UsersList;
