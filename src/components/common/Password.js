import React, { useRef } from 'react';
import { FormGroup, InputGroup, Form } from 'react-bootstrap';
import TooltipCustom from '../common/TooltipCustom';

const Password = ({ state, onTextChanged }) => {
  const passwordError =
    'Password must contain at least 1 upper and lower case letter,' +
    ' 1 numeric character and be no less than 5 characters long!';

  return (
    <>
      <FormGroup className='row justify-content-center'>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text className='bg-white'>
              <i className='fas fa-hashtag fa-fw m-auto' />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <TooltipCustom
            text={passwordError}
            show={state.isValid}
            placement='right'>
            <Form.Control
              required
              pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$'
              type='password'
              placeholder='Password'
              ref={useRef()}
              value={state.value}
              onChange={onTextChanged}
            />
          </TooltipCustom>
        </InputGroup>
      </FormGroup>
    </>
  );
};

export default Password;
