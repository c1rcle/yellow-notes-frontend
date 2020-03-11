import React, { useContext } from './node_modules/react';
import { FormGroup, Form } from './node_modules/react-bootstrap';
import { Tooltip } from './node_modules/reactstrap';
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
