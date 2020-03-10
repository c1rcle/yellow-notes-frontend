import React, { Fragment } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Login = () => {
  return (
    <Fragment>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className='my-4'>
          <h1 className='display-4 text-center'>Welcome to Yellow Notes!</h1>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className='my-2'>
          <Form>
            <Form.Group as={Row} controlId='emailField'>
              <Form.Label column xs='2' sm='1' className='pl-4'>
                <i className='fas fa-at'></i>
              </Form.Label>
              <Col xs='10' sm='11'>
                <Form.Control type='email' placeholder='Email Address' />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId='passwordField'>
              <Form.Label column xs='2' sm='1' className='pl-4'>
                <i className='fas fa-hashtag'></i>
              </Form.Label>
              <Col xs='10' sm='11'>
                <Form.Control type='password' placeholder='Password' />
              </Col>
            </Form.Group>
            <Button className='btn-block' variant='outline-primary'>
              <i className='fas fa-home mr-1'></i> Login
            </Button>
            <hr />
            <p className='lead text-center'>
              Or{' '}
              <Button variant='outline-success'>
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
