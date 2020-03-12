import React, { Fragment, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Email from './common/Email';
import Password from './common/Password';
import FormButton from './common/FormButton';

const Login = () => {
  const [user, setUser] = useState({
    email: { value: '', isValid: false },
    password: { value: '', isValid: false }
  });

  const { email, password } = user;

  const onChange = name => ({ target }) => {
    const { validity, value } = target;
    const isValid =
      name === 'email' && (validity.patternMismatch || validity.typeMismatch);
    setUser({
      ...user,
      [name]: { value, isValid }
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (email.value === '' || password.value === '')
      alert('Please fill all fields!');
    else {
      console.log('Launching login action...');
    }
  };

  return (
    <Fragment>
      <Row className='justify-content-center'>
        <Col xs={11} className='my-4'>
          <h1 className='display-4 text-center'>Welcome to Yellow Notes!</h1>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={11} lg={6} className='my-2'>
          <Form onSubmit={e => onSubmit(e)} noValidate>
            <Email onTextChanged={onChange('email')} state={email} />
            <Password onTextChanged={onChange('password')} state={password} />
            <FormButton disabled={false} icon={'home'} title={'Login'} />
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
