import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Email from './Email';
import Password from './Password';
import PasswordRepeat from './PasswordRepeat';
import Checkbox from './Checkbox';
import FormButton from './FormButton';

const Registration = () => {
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
            <Email />
            <Password />
            <PasswordRepeat />
            <Checkbox />
            <FormButton />
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Registration;
