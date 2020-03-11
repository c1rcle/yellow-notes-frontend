import React, { Fragment } from 'react';
import { FormGroup, Form } from 'react-bootstrap';
import { Tooltip } from 'reactstrap';

const PasswordRepeat = props => {
  const {
    password,
    passwordRepeat,
    onTextChanged,
    passwordRepeatTooltip
  } = props;

  const passwordRepeatError = 'Passwords do not match!';

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default PasswordRepeat;
