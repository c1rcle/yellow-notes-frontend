import React, { useRef } from 'react';
import { FormGroup, InputGroup, Form } from 'react-bootstrap';
import TooltipCustom from '../../common/TooltipCustom';

const PasswordRepeat = ({ state, pattern, onTextChanged, onBlur }) => {
  const passwordRepeatError = 'Passwords do not match!';

  return (
    <FormGroup className='row justify-content-center'>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text className='bg-white'>
            <i className='fas fa-redo fa-fw m-auto' />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <TooltipCustom
          text={passwordRepeatError}
          show={state.wasBlurred && !!state.value && pattern !== state.value}
          placement='right'>
          <Form.Control
            required
            pattern={pattern}
            id='passwordRepeat'
            type='password'
            autoComplete='off'
            placeholder='Repeat Password'
            ref={useRef()}
            value={state.value}
            onChange={onTextChanged}
            onBlur={onBlur}
          />
        </TooltipCustom>
      </InputGroup>
    </FormGroup>
  );
};

export default PasswordRepeat;
