import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const User = ({
  id,
  firstName,
  lastName,
  email,
  dob,
  age,
  salary,
  department,
  handleRemoveUser
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="user">
      <Card.Body>
        <Card.Title className="user-title">{firstName}</Card.Title>
        <div className="user-details">
          <div>First Name: {firstName}</div>
          <div>Last Name: {lastName} </div>
          <div>Email: {email} </div>
          <div>Date of Birth: {dob}</div>
          <div>Age: {age} </div>
          <div>Salary: {salary} </div>
          <div>Department: {department} </div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveUser(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default User;
