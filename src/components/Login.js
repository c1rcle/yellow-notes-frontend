import React, { Fragment, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') alert('Please fill all fields!');
    else {
      console.log('Launching login action...');
    }
  };

  return (
    <Fragment>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className='my-4'>
          <h1 className='display-4 text-center'>Welcome to Yellow Notes!</h1>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className='my-2'>
          <Form onSubmit={onSubmit}>
            <Form.Group as={Row} controlId='emailField'>
              <Form.Label column xs='2' sm='1' className='pl-4'>
                <i className='fas fa-at'></i>
              </Form.Label>
              <Col xs='10' sm='11'>
                <Form.Control
                  name='email'
                  value={email}
                  onChange={onChange}
                  type='email'
                  placeholder='Email Address'
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='passwordField'>
              <Form.Label column xs='2' sm='1' className='pl-4'>
                <i className='fas fa-hashtag'></i>
              </Form.Label>
              <Col xs='10' sm='11'>
                <Form.Control
                  name='password'
                  value={password}
                  onChange={onChange}
                  type='password'
                  placeholder='Password'
                />
              </Col>
            </Form.Group>
            <Button
              type='submit'
              className='btn-block'
              variant='outline-primary'
            >
              <i className='fas fa-home mr-1'></i> Login
            </Button>
            <hr />
            <p className='lead text-center'>
              Or{' '}
              <Button
                onClick={e => console.log('Redirect to register page...')}
                variant='outline-success'
              >
                <i className='fas fa-user-plus mr-2'></i>Register
              </Button>{' '}
              to create new account!
            </p>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Login;
