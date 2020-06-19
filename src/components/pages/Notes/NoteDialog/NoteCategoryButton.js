import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import useCategories from '../../../../contexts/CategoriesContext';
import CategoryDropdown from '../CategoryBar/Dialogs/CategoryDropdown';
import useFilters from '../../../../contexts/FiltersContext';
import OverflowingTooltip from '../../../common/CustomTooltip';

const NoteCategoryButton = ({ setCategoryId, disabled, note }) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [, dispatchFilters] = useFilters();

  const noneOption = { categoryId: -1, name: 'None' };
  const [{ categories }] = useCategories();

  const assignCategory = e => {
    const id = parseInt(e.target.id);
    if (Number.isInteger(id)) {
      if (id === -1) setCategoryId(null);
      else setCategoryId(id);

      dispatchFilters({ type: 'NEED_UPDATE', payload: true });
      setDialogVisible(false);
    }
  };

  const category = useRef();
  const updateLocalCategory = () => {
    category.current = categories.find(c => c.categoryId === note.categoryId);
  };
  useEffect(updateLocalCategory, [note.categoryId]);

  const getCategoryName = () => (category.current !== undefined ? category.current.name : 'None');

  return (
    <CategoryDropdown
      visible={dialogVisible}
      setVisible={setDialogVisible}
      variant='primary'
      title='Assign to a category'
      onOptionClick={assignCategory}
      options={[noneOption, ...categories]}
      placement='bottom'>
      <Button
        className='overflow-ellipsis category-item'
        variant='outline-primary'
        onClick={() => setDialogVisible(true)}
        disabled={disabled}>
        <i className='fas fa-tag' />
        <OverflowingTooltip text={getCategoryName()} position='bottom'>
          <div className='d-inline category-item mx-1 overflow-ellipsis' ref={useRef()}>
            {getCategoryName()}
          </div>
        </OverflowingTooltip>
      </Button>
    </CategoryDropdown>
  );
};

export default NoteCategoryButton;
