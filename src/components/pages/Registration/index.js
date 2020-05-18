import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Email from '../../common/controls/Email';
import Password from '../../common/controls/Password';
import FormButton from '../../common/controls/FormButton';
import PasswordRepeat from './PasswordRepeat';
import Checkbox from './Checkbox';
import useUser from '../../../contexts/UserContext';

const Registration = () => {
  const [state, setState] = useState({
    email: { value: '', isInvalid: true },
    password: { value: '', isInvalid: true },
    passwordRepeat: { value: '', isInvalid: true },
    termsAccepted: false
  });

  const [user, dispatch] = useUser();

  const { email, password, passwordRepeat, termsAccepted } = state;

  const onTextChanged = name => ({ target }) => {
    const { validity, value } = target;
    const isInvalid = validity.patternMismatch || validity.typeMismatch;
    setState(state => ({ ...state, [name]: { value, isInvalid } }));
  };

  const onBlur = name => () => {
    if (state[name].wasBlurred) return;
    setState(state => ({ ...state, [name]: { ...state[name], wasBlurred: true } }));
  };

  const setTermsAccepted = () => {
    setState(state => ({ ...state, termsAccepted: !termsAccepted }));
  };

  const onSubmit = e => {
    e.preventDefault();
    e.target.className += ' was-validated';
    if (e.target.checkValidity()) {
      dispatch({
        type: 'REGISTER',
        payload: { email: state.email.value, password: state.password.value }
      });
    }
  };

  const tooltipTextTermsError = 'You need to accept terms to create an account!';
  const tooltipTermsEnabled = !(
    termsAccepted ||
    email.isInvalid ||
    password.isInvalid ||
    passwordRepeat.isInvalid
  );
  return (
    <>
      {user.isUserLoggedIn && <Redirect to='notes' />}

      <Row className='justify-content-center'>
        <Col xs={11} lg={8} className='my-4'>
          <h1 className='display-4 text-center'>Register an account</h1>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs={11} lg={6} className='my-2'>
          <Form onSubmit={onSubmit} className='needs-validation' noValidate>
            <Email onTextChanged={onTextChanged('email')} onBlur={onBlur('email')} state={email} />
            <Password
              onTextChanged={onTextChanged('password')}
              onBlur={onBlur('password')}
              state={password}
            />
            <PasswordRepeat
              pattern={password.value}
              onTextChanged={onTextChanged('passwordRepeat')}
              onBlur={onBlur('passwordRepeat')}
              state={passwordRepeat}
            />
            <Checkbox
              onClick={setTermsAccepted}
              tooltipText={tooltipTextTermsError}
              tooltipEnabled={tooltipTermsEnabled}
            />
            <FormButton
              disabled={!termsAccepted}
              icon={'user-plus'}
              title={'Create new account'}
              isLoading={user.isLoading}
              tooltipText={tooltipTextTermsError}
            />
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Registration;
