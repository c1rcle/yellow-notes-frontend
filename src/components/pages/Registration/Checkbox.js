import React, { useRef } from 'react';
import { FormGroup, Form } from 'react-bootstrap';
import TooltipCustom from '../../common/TooltipCustom';

const Checkbox = ({ onClick, tooltipText, tooltipEnabled }) => {
  return (
    <TooltipCustom text={tooltipText} show={!!tooltipText && tooltipEnabled} placement='right'>
      <FormGroup className='row justify-content-center my-4' ref={useRef()}>
        <Form.Check
          custom
          id='1'
          type='checkbox'
          label='I agree to the terms and conditions'
          onClick={onClick}
        />
      </FormGroup>
    </TooltipCustom>
  );
};

export default Checkbox;
