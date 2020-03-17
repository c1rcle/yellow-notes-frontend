import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Email from '../common/Email';
import Password from '../common/Password';
import FormButton from '../common/FormButton';
import useUser from '../../contexts/UserContext';

const Login = () => {
  const [user, dispatch] = useUser();

  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const { email, password } = state;

  const submitDisabled = email === '' || password === '';

  const onTextChanged = name => ({ target }) => {
    setState({ ...state, [name]: target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    //Todo - validation.
    if (!submitDisabled) dispatch({ type: 'LOGIN', payload: { ...state } });
  };

  return (
    <>
      {user.isUserLoggedIn && <Redirect to='notes' />}

      <Row className='justify-content-center'>
        <Col xs={11} className='my-4'>
          <h1 className='display-4 text-center'>Welcome to Yellow Notes!</h1>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs={11} lg={6} className='my-2'>
          <Form onSubmit={onSubmit} noValidate>
            <Email onTextChanged={onTextChanged('email')} state={email} />
            <Password onTextChanged={onTextChanged('password')} state={password} />
            <FormButton disabled={submitDisabled} icon={'home'} title={'Login'} />

            <hr />
            <p className='lead text-center'>
              Or{' '}
              <Link to='/registration'>
                <Button variant='outline-success'>
                  <i className='fas fa-user-plus mr-2' />
                  Register
                </Button>
              </Link>{' '}
              to create new account!
            </p>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
