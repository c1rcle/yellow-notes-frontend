import React from 'react';
import { FormGroup, InputGroup, Form } from 'react-bootstrap';
import CustomTooltip from '../CustomTooltip';

const Password = ({ state, onTextChanged, onBlur }) => {
  const passwordError =
    'Password must contain at least 1 upper and lower case letter,' +
    ' 1 numeric character and be no less than 5 characters long!';

  return (
    <>
      <FormGroup className='row justify-content-center'>
        <CustomTooltip
          text={passwordError}
          show={state.wasBlurred && state.isInvalid}
          position='right'>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text className='bg-white'>
                <i className='fas fa-hashtag fa-fw m-auto' />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              required
              pattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$'
              type='password'
              placeholder='Password'
              value={state.value}
              onChange={onTextChanged}
              onBlur={onBlur}
            />
          </InputGroup>
        </CustomTooltip>
      </FormGroup>
    </>
  );
};

export default Password;
