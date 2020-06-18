import React, { useRef } from 'react';
import OverflowTooltip from '../../../common/OverflowTooltip';
import { Form, ListGroup } from 'react-bootstrap';
import useFilters from '../../../../contexts/FiltersContext';

const CategoryFilter = ({ category }) => {
  const [, dispatchFilters] = useFilters();

  const onChange = e =>
    dispatchFilters({
      type: 'SET_FILTER',
      payload: { categoryId: category.categoryId, checked: e.target.checked }
    });

  return (
    <OverflowTooltip text={category.name} position='bottom'>
      <ListGroup.Item className='category-item mr-3 p-0 pl-1 overflow-ellipsis' ref={useRef()}>
        <Form.Check
          custom
          className='py-2'
          type='checkbox'
          onChange={onChange}
          id={`custom-checkbox ${category.categoryId}`}
          label={category.name}
        />
      </ListGroup.Item>
    </OverflowTooltip>
  );
};

export default CategoryFilter;
