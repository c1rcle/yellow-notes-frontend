import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Email from '../common/Email';
import Password from '../common/Password';
import FormButton from '../common/FormButton';
import useUser from '../../contexts/UserContext';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });
  const { email, password } = state;

  const [user, dispatch] = useUser();

  const onTextChanged = name => ({ target }) => {
    setState({ ...state, [name]: target.value });
  };

  const submitDisabled = email === '' || password === '';

  const onSubmit = e => {
    e.preventDefault();
    e.target.className += ' was-validated';
    if (e.target.checkValidity()) {
      dispatch({ type: 'LOGIN', payload: { ...state } });
    } else {
      dispatch({ type: 'LOGIN_FAILED' });
    }
  };

  useEffect(() => {
    if (user.error && user.error.type === 'LOGIN') {
      setState({ ...state, password: '' });
    }
  }, [user.error]);

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
            <Email onTextChanged={onTextChanged('email')} state={{ value: email }} />
            <Password onTextChanged={onTextChanged('password')} state={{ value: password }} />
            <FormButton
              disabled={submitDisabled}
              icon={'home'}
              title={'Login'}
              isLoading={user.isLoading}
            />

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
