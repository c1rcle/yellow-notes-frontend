import React, { useContext, useRef } from 'react';
import { FormGroup, Form } from 'react-bootstrap';
import RegistrationContext from '../../contexts/Registration';
import TooltipCustom from '../common/TooltipCustom';

const PasswordRepeat = () => {
  const { password, passwordRepeat, onTextChanged, passwordRepeatTooltip } = useContext(RegistrationContext);

  const passwordRepeatError = 'Passwords do not match!';

  return (
    <>
      <FormGroup className="row justify-content-center">
        <TooltipCustom text={passwordRepeatError} isOpen={passwordRepeatTooltip} placement="right">
          <Form.Control
            required
            pattern={password}
            id="passwordRepeat"
            type="password"
            placeholder="Repeat Password"
            ref={useRef()}
            value={passwordRepeat}
            onChange={onTextChanged}
          />
        </TooltipCustom>
      </FormGroup>
    </>
  );
};

export default PasswordRepeat;
