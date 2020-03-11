import React, { Fragment, useState } from 'react';
import { Form, Row, FormGroup, Col, InputGroup, Button } from 'react-bootstrap';

const Registration = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordRepeat: ''
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const passwordError =
    'Password must contain at least 1 upper case letter,' +
    ' 1 numeric character and be no less than 5 characters long!';
  const passwordRepeatError = 'Passwords do not match!';

  const { email, password, passwordRepeat } = user;

  const onTextChanged = e => {
    setCustomValidity(e.target);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const setCustomValidity = target => {
    if (target.name === 'password' || target.name === 'passwordRepeat') {
      if (target.validity.patternMismatch) {
        target.setCustomValidity(
          target.name === 'password' ? passwordError : passwordRepeatError
        );
      } else { target.setCustomValidity(''); }
      target.reportValidity();
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    // TODO - register a user.
  };

  return (
    <Fragment>
      <Row className='justify-content-center'>
        <Col xs={11} lg={8} className='my-4'>
          <h1 className='display-4 text-center'>Register an account</h1>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs={11} lg={6} className='my-2'>
          <Form onSubmit={onSubmit}>
            <FormGroup className='row justify-content-center'>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text className='bg-white'>
                    <i className='fas fa-at fa-fw m-auto' />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  required
                  name='email'
                  type='email'
                  placeholder='Email address'
                  value={email}
                  onChange={onTextChanged}
                />
              </InputGroup>
            </FormGroup>

            <FormGroup className='row justify-content-center'>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text className='bg-white'>
                    <i className='fas fa-hashtag fa-fw m-auto' />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  required
                  pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$'
                  name='password'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={onTextChanged}
                />
              </InputGroup>
            </FormGroup>

            <FormGroup className='row justify-content-center'>
              <Form.Control
                required
                pattern={password}
                name='passwordRepeat'
                type='password'
                placeholder='Repeat Password'
                value={passwordRepeat}
                onChange={onTextChanged}
              />
            </FormGroup>

            <FormGroup className='row justify-content-center my-4'>
              <Form.Check
                custom
                id='1'
                type='checkbox'
                label='I agree to the terms and conditions'
                onClick={() => setTermsAccepted(!termsAccepted)}
              />
            </FormGroup>

            <Button
              variant='outline-primary'
              block
              type='submit'
              disabled={!termsAccepted}>
              <i className='fas fa-user-plus mr-1' />
              Create account
            </Button>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Registration;
