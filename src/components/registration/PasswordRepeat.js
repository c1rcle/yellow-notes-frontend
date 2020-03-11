import React, { useContext } from 'react';
import { FormGroup, Form } from 'react-bootstrap';
import { Tooltip } from 'reactstrap';
import RegistrationContext from '../../contexts/Registration';

const PasswordRepeat = () => {
  const {
    password,
    passwordRepeat,
    onTextChanged,
    passwordRepeatTooltip
  } = useContext(RegistrationContext);

  const passwordRepeatError = 'Passwords do not match!';

  return (
    <>
      <FormGroup className='row justify-content-center'>
        <Form.Control
          required
          pattern={password}
          id='passwordRepeat'
          type='password'
          placeholder='Repeat Password'
          value={passwordRepeat}
          onChange={onTextChanged}
        />
        <Tooltip
          target='passwordRepeat'
          isOpen={passwordRepeatTooltip}
          placement='left'>
          {passwordRepeatError}
        </Tooltip>
      </FormGroup>
    </>
  );
};

export default PasswordRepeat;
