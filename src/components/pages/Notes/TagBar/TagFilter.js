import React, { useRef } from 'react';
import OverflowingTooltip from '../../../common/OverflowingTooltip';
import { Form, ListGroup } from 'react-bootstrap';

const TagFilter = ({ category }) => {
  return (
    <OverflowingTooltip text={category.name} position='bottom'>
      <ListGroup.Item className='m-0 mr-1 p-0 pl-1 overflow-hidden' ref={useRef()}>
        <Form>
          <Form.Check
            custom
            className='category-item py-2'
            type='checkbox'
            id={`custom-checkbox ${category.categoryId}`}
            label={category.name}
          />
        </Form>
      </ListGroup.Item>
    </OverflowingTooltip>
  );
};

export default TagFilter;
