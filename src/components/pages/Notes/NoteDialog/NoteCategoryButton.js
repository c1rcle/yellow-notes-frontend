import React, { useState } from 'react';
import useCategories from '../../../../contexts/CategoriesContext';
import CategoryDropdown from '../CategoryBar/Dialogs/CategoryDropdown';
import SmallButton from '../../../common/SmallButton';

const NoteCategoryButton = ({ setCategoryId, isNoteNew, disabled }) => {
  const [dialogVisible, setDialogVisible] = useState(false);

  const noneOption = { categoryId: -1, name: 'None' };
  const [{ categories }] = useCategories();

  const assignCategory = e => {
    const id = parseInt(e.target.id);
    if (Number.isInteger(id)) {
      if (id === -1) setCategoryId(null);
      else setCategoryId(id);
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
      <SmallButton
        variant='outline-primary'
        onClick={() => setDialogVisible(!dialogVisible)}
        disabled={disabled}>
        <i className='fas fa-tag fa-fw' />
      </SmallButton>
    </CategoryDropdown>
  );
};

export default NoteCategoryButton;
