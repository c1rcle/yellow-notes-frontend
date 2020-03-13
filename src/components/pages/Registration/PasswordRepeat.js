import React, { useRef } from 'react';
import { FormGroup, Form } from 'react-bootstrap';
import TooltipCustom from '../../common/TooltipCustom';

const PasswordRepeat = ({ state, pattern, onTextChanged }) => {
  const passwordRepeatError = 'Passwords do not match!';

  return (
    <FormGroup className='row justify-content-center'>
      <TooltipCustom
        text={passwordRepeatError}
        show={pattern !== state.value}
        placement='right'>
        <Form.Control
          required
          pattern={pattern}
          id='passwordRepeat'
          type='password'
          placeholder='Repeat Password'
          ref={useRef()}
          value={state.value}
          onChange={onTextChanged}
        />
      </TooltipCustom>
    </FormGroup>
  );
};

export default PasswordRepeat;
