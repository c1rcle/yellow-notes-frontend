import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useCategories from '../../../../contexts/CategoriesContext';
import CategoryDropdown from './Dialogs/CategoryDropdown';

const RemoveCategoryButton = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [{ categories }, dispatch] = useCategories();

  const onClick = () => setDialogVisible(!dialogVisible);

  const removeCategory = e => {
    const id = parseInt(e.target.id);
    if (Number.isInteger(id)) {
      dispatch({ type: 'REMOVE_CATEGORY', payload: { categoryId: id } });
      setDialogVisible(false);
    }
  };

  return (
    <CategoryDropdown
      visible={dialogVisible}
      setVisible={setDialogVisible}
      variant='danger'
      title='Delete category'
      onOptionClick={removeCategory}
      options={categories}
      placement='bottom'>
      <Button variant='danger' onClick={onClick} className='my-2 ml-2 mr-3 p-1 px-2'>
        <i className={'fas fa-minus fa-fw'} />
      </Button>
    </CategoryDropdown>
  );
};

export default RemoveCategoryButton;
