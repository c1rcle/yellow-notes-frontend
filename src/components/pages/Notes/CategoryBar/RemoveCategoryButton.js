import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useCategories from '../../../../contexts/CategoriesContext';
import CategoryNameInput from './Dialogs/CategoryNameInput';

const RemoveCategoryButton = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [{ categories }, dispatch] = useCategories();

  const onClick = () => setDialogVisible(true);

  const categoryExists = name => {
    let exist = false;
    categories.forEach((element, index, array) => {
      if (element.name === name) {
        exist = true;
      }
    });
    return exist;
  };

  const removeCategory = categoryName => {
    let id = -1;
    categories.forEach((element, index, array) => {
      if (element.name === categoryName) {
        id = element.categoryId;
      }
    });
    if (id !== -1) {
      dispatch({ type: 'REMOVE_CATEGORY', payload: { categoryId: id } });
    } else console.log('cant u find?');
  };

  return (
    <CategoryNameInput
      visible={dialogVisible}
      setVisible={setDialogVisible}
      inputPlaceholder='Enter new category name'
      buttonVariant='danger'
      buttonIconClass='fas fa-trash fa-fw'
      isInputValid={categoryExists}
      invalidMessage='Category name must be unique'
      onSubmitValid={removeCategory}
      placement='bottom'>
      <Button variant='danger' onClick={onClick} className='my-2 ml-2 mr-3 p-1 px-2'>
        <i className={'fas fa-minus fa-fw'} />
      </Button>
    </CategoryNameInput>
  );
};

export default RemoveCategoryButton;
