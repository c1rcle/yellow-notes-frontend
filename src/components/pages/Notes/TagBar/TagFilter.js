import React, { useRef } from 'react';
import OverflowingTooltip from '../../../common/OverflowingTooltip';
import { Form, ListGroup } from 'react-bootstrap';

const TagFilter = props => {
  return (
    <OverflowingTooltip text={props.tagName} position='bottom'>
      <ListGroup.Item className='m-0 mr-2 p-0 overflow-hidden' ref={useRef()}>
        <Form.Check
          inline
          className='tag-item m-0 p-0 py-2'
          type='checkbox'
          label={props.tagName}
        />
      </ListGroup.Item>
    </OverflowingTooltip>
  );
};

export default TagFilter;
