import React, { useContext, useRef } from 'react';
import { FormGroup, InputGroup, Form } from 'react-bootstrap';
import RegistrationContext from '../../contexts/Registration';
import TooltipCustom from '../common/TooltipCustom';

const Email = () => {
  const { email, onTextChanged, emailTooltip } = useContext(RegistrationContext);

  const emailError = 'Enter a valid e-mail address!';

  return (
    <>
      <FormGroup className="row justify-content-center">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text className="bg-white">
              <i className="fas fa-at fa-fw m-auto" />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <TooltipCustom text={emailError} isOpen={emailTooltip} placement="right">
            <Form.Control
              required
              id="email"
              type="email"
              placeholder="Email address"
              ref={useRef()}
              value={email}
              onChange={onTextChanged}
            />
          </TooltipCustom>
        </InputGroup>
      </FormGroup>
    </>
  );
};

export default Email;
