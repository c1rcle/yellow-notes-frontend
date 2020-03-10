import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Fragment>
      <Form style={formStyle}>
        <Form.Group controlId='emailField'>
          <Form.Control type='email' placeholder='Emaill Address' />
        </Form.Group>
        <Form.Group controlId='passwordField'>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button className='btn-block' variant='outline-primary'>
          Login
        </Button>
        <hr />
        <p className='lead text-center'>
          Or <Button variant='outline-success'>Register</Button> to create new
          account!
        </p>
      </Form>
    </Fragment>
  );
};

const formStyle = {
  maxWidth: '500px',
  margin: '2rem auto'
};

export default Login;
