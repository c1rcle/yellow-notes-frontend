import React from 'react';
import { FormGroup, Form } from 'react-bootstrap';
import CustomTooltip from '../../common/CustomTooltip';

const Checkbox = ({ onClick, tooltipText, tooltipEnabled }) => {
  return (
    <CustomTooltip text={tooltipText} show={!!tooltipText && tooltipEnabled} position='right'>
      <FormGroup className='row justify-content-center my-4'>
        <Form.Check
          custom
          id='1'
          type='checkbox'
          label='I agree to the terms and conditions'
          onClick={onClick}
        />
      </FormGroup>
    </CustomTooltip>
  );
};

export default Checkbox;
