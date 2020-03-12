import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Email from './Email';
import Password from './Password';
import PasswordRepeat from './PasswordRepeat';
import Checkbox from './Checkbox';
import FormButton from './FormButton';

const Registration = () => {
  const [state, setState] = useState({
    password: { value: '', isValid: false },
    passwordRepeat: { value: '', isValid: false },
    email: { value: '', isValid: false },
    termsAccepted: false
  });

  const onTextChanged = name => ({ target }) => {
    const { validity, value } = target;
    const isValid = validity.patternMismatch || validity.typeMismatch;
    setState({ ...state, [name]: { value, isValid } });
  };

  const onSubmit = e => {
    e.preventDefault();
    e.target.className += ' was-validated';
    // TODO - register a user.
  };

  return (
    <>
      <Row className='justify-content-center'>
        <Col xs={11} lg={8} className='my-4'>
          <h1 className='display-4 text-center'>Register an account</h1>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs={11} lg={6} className='my-2'>
          <Form onSubmit={onSubmit} className='needs-validation' noValidate>
            <Email onTextChanged={onTextChanged('email')} state={state.email} />
            <Password
              onTextChanged={onTextChanged('password')}
              state={state.password}
            />
            <PasswordRepeat
              pattern={state.password.value}
              onTextChanged={onTextChanged('passwordRepeat')}
              state={state.passwordRepeat}
            />
            <Checkbox
              onClick={() =>
                setState({ ...state, termsAccepted: !state.termsAccepted })
              }
            />
            <FormButton disabled={!state.termsAccepted} />
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Registration;
