import React, { useRef } from 'react';
import { FormGroup, InputGroup, Form } from 'react-bootstrap';
import TooltipCustom from './TooltipCustom';

const Email = props => {
  const emailError = 'Enter a valid e-mail address!';

  return (
    <FormGroup className='row justify-content-center'>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text className='bg-white'>
            <i className='fas fa-at fa-fw m-auto' />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <TooltipCustom
          text={emailError}
          show={props.state.isValid}
          placement='right'
        >
          <Form.Control
            required
            id='email'
            type='email'
            placeholder='Email address'
            ref={useRef()}
            value={props.state.email}
            onChange={props.onTextChanged}
          />
        </TooltipCustom>
      </InputGroup>
    </FormGroup>
  );
};

export default Email;
