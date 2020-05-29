import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useCategories from '../../../../contexts/CategoriesContext';
import CategoryDropdown from '../CategoryBar/Dialogs/CategoryDropdown';
import useFilters from '../../../../contexts/FiltersContext';

const NoteCategoryButton = ({ setCategoryId, disabled }) => {
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

  return (
    <CategoryDropdown
      visible={dialogVisible}
      setVisible={setDialogVisible}
      variant='primary'
      title='Assign to a category'
      onOptionClick={assignCategory}
      options={[noneOption, ...categories]}
      placement='bottom'>
      <Button variant='outline-primary' onClick={() => setDialogVisible(true)} disabled={disabled}>
        <i className='fas fa-tag' />
      </Button>
    </CategoryDropdown>
  );
};

export default NoteCategoryButton;
