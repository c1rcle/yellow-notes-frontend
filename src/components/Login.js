import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Login = () => {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} className='my-5'>
        <Form>
          <Form.Group controlId='emailField'>
            <Form.Control type='email' placeholder='Email Address' />
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
      </Col>
    </Row>
  );
};

export default Login;
