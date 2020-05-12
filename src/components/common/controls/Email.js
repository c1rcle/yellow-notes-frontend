import React from 'react';
import { FormGroup, InputGroup, Form } from 'react-bootstrap';
import CustomTooltip from '../CustomTooltip';

const Email = ({ state, onTextChanged, onBlur }) => {
  const emailError = 'Enter a valid e-mail address!';

  return (
    <FormGroup className='row justify-content-center'>
      <CustomTooltip text={emailError} show={state.wasBlurred && state.isInvalid} position='right'>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text className='bg-white'>
              <i className='fas fa-at fa-fw m-auto' />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            required
            id='email'
            type='email'
            placeholder='Email address'
            value={state.email}
            onChange={onTextChanged}
            onBlur={onBlur}
          />
        </InputGroup>
      </CustomTooltip>
    </FormGroup>
  );
};

export default Email;
