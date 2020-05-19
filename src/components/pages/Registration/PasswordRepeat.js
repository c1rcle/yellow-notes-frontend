import React from 'react';
import { FormGroup, InputGroup, Form } from 'react-bootstrap';
import CustomTooltip from '../../common/CustomTooltip';

const PasswordRepeat = ({ state, pattern, onTextChanged, onBlur }) => {
  const passwordRepeatError = 'Passwords do not match!';

  return (
    <FormGroup className='row justify-content-center'>
      <CustomTooltip
        text={passwordRepeatError}
        show={state.wasBlurred && !!state.value && pattern !== state.value}
        position='right'>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text className='bg-white'>
              <i className='fas fa-redo fa-fw m-auto' />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            required
            pattern={pattern}
            id='passwordRepeat'
            type='password'
            placeholder='Repeat Password'
            value={state.value}
            onChange={onTextChanged}
            onBlur={onBlur}
          />
        </InputGroup>
      </CustomTooltip>
    </FormGroup>
  );
};

export default PasswordRepeat;
