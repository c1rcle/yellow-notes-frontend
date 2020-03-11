import React, { Fragment, useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Email from './Email';
import Password from './Password';
import PasswordRepeat from './PasswordRepeat';
import Checkbox from './Checkbox';
import FormButton from './FormButton';

const Registration = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordRepeat: ''
  });

  const [tooltip, setTooltip] = useState({
    emailTooltip: false,
    passwordTooltip: false,
    passwordRepeatTooltip: false
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const { email, password, passwordRepeat } = user;
  const { emailTooltip, passwordTooltip, passwordRepeatTooltip } = tooltip;

  const onTextChanged = e => {
    setTooltips(e.target);
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    e.target.className += ' was-validated';
    // TODO - register a user.
  };

  const setTooltips = target => {
    if (target.validity.patternMismatch || target.validity.typeMismatch) {
      setTooltip({ ...tooltip, [target.id + 'Tooltip']: true });
    } else setTooltip({ ...tooltip, [target.id + 'Tooltip']: false });
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
          <Form onSubmit={onSubmit} className='needs-validation' noValidate>
            <Email email={email} onTextChanged={onTextChanged} emailTooltip={emailTooltip} />
            <Password password={password} onTextChanged={onTextChanged} passwordTooltip={passwordTooltip} />
            <PasswordRepeat password={password} passwordRepeat={passwordRepeat} onTextChanged={onTextChanged} passwordRepeatTooltip={passwordRepeatTooltip} />
            <Checkbox termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} />
            <FormButton termsAccepted={termsAccepted} type='submit' />
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Registration;
