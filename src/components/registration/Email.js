import React, { Fragment } from 'react';
import { FormGroup, InputGroup, Form } from 'react-bootstrap';
import { Tooltip } from 'reactstrap';

const Email = props => {
  const { email, onTextChanged, emailTooltip } = props;

  const emailError = 'Enter a valid e-mail address!';

  return (
    <Fragment>
      <FormGroup className='row justify-content-center'>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text className='bg-white'>
              <i className='fas fa-at fa-fw m-auto' />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            required
            id='email'
            type='email'
            placeholder='Email address'
            value={email}
            onChange={onTextChanged}
          />
          <Tooltip target='email' isOpen={emailTooltip} placement='left'>
            {emailError}
          </Tooltip>
        </InputGroup>
      </FormGroup>
    </Fragment>
  );
};

export default Email;
