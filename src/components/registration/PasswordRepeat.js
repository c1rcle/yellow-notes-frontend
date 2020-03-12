import React, { useRef } from 'react';
import { FormGroup, Form } from 'react-bootstrap';
import TooltipCustom from '../common/TooltipCustom';

const PasswordRepeat = props => {
  const passwordRepeatError = 'Passwords do not match!';

  return (
    <FormGroup className="row justify-content-center">
      <TooltipCustom text={passwordRepeatError} show={props.pattern !== props.state.value} placement="right">
        <Form.Control
          required
          pattern={props.pattern}
          id="passwordRepeat"
          type="password"
          placeholder="Repeat Password"
          ref={useRef()}
          value={props.state.passwordRepeat}
          onChange={props.onTextChanged}
        />
      </TooltipCustom>
    </FormGroup>
  );
};

export default PasswordRepeat;
