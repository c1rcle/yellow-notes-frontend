import React, { Fragment } from 'react';
import { Form, Row, FormGroup, Col, InputGroup, Button } from 'react-bootstrap';

const Registration = () => {
  return (
    <Fragment>
      <Row className='justify-content-center'>
        <Col xs={11} lg={8} className='my-4'>
          <h1 className='display-4 text-center'>Register an account</h1>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs={11} lg={6} className='my-2'>
          <Form>
            <FormGroup className='row justify-content-center'>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text className='bg-white'>
                    <i className='fas fa-at fa-fw m-auto' />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type='email'
                  placeholder='Email address'
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
                  type='password'
                  placeholder='Password'
                />
              </InputGroup>
            </FormGroup>

            <FormGroup className='row justify-content-center'>
              <Form.Control
                type='password'
                placeholder='Repeat Password'
              />
            </FormGroup>

            <FormGroup className='row justify-content-center my-4'>
              <Form.Check custom type='checkbox' label='I agree to the terms and conditions' />
            </FormGroup>

            <Button variant='outline-primary' block>
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
