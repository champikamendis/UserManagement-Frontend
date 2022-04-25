import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = (props) => {
  const [user, setUser] = useState(() => {
    return {
      firstName: props.user? props.user.firstName: '',
      lastName: props.user ? props.user.lastName : '',
      email: props.user ? props.user.email : '',
      dob: props.user ? props.user.dob : '',
      age: props.user ? props.user.age : '',
      salary: props.user ? props.user.salary : '',
      department: props.user ? props.user.department : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { firstName, lastName, email, dob, salary, department, age } = user;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [firstName, lastName, email, dob, age, salary, department];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const user = {
        firstName,
        lastName,
        email,
        dob,
        age, //calculation
        salary,
        department //shoud take from the db
      };
      props.handleOnSubmit(user);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'salary':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setUser((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setUser((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Enter first name of the employee"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Enter last name of the employee"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="email"
            value={email}
            placeholder="Enter employee email address"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="dob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="dob"
            value={dob}
            placeholder="Enter DoB the employee"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="age"
            value={age}
            placeholder="Enter Age the employee"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="salary">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="salary"
            value={salary}
            placeholder="Enter salary of the employee"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="department">
          <Form.Label>Department</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="department"
            value={department}
            placeholder="Enter the department of the employee"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
