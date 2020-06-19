import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useCategories from '../../../../contexts/CategoriesContext';
import CategoryNameInput from './Dialogs/CategoryNameInput';

const AddCategoryButton = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [{ categories }, dispatch] = useCategories();

  const onClick = () => setDialogVisible(true);

  const isCategoryNameUnique = name => {
    let unique = true;
    categories.forEach((element, index, array) => {
      if (element.name === name) {
        unique = false;
      }
    });
    return unique;
  };

  const addCategory = categoryName =>
    dispatch({ type: 'ADD_CATEGORY', payload: { name: categoryName } });

  return (
    <CategoryNameInput
      visible={dialogVisible}
      setVisible={setDialogVisible}
      inputPlaceholder='Enter new category name'
      buttonVariant='success'
      buttonIconClass='fas fa-plus fa-fw'
      isInputValid={isCategoryNameUnique}
      invalidMessage='Category name must be unique'
      onSubmitValid={addCategory}
      placement='bottom'>
      <Button variant='success' onClick={onClick} className='my-2 p-1 px-2'>
        <i className={'fas fa-plus fa-fw'} />
      </Button>
    </CategoryNameInput>
  );
};

export default AddCategoryButton;
