import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useCategories from '../../../../contexts/CategoriesContext';
import TagNameInput from './TagNameInput';

const AddTagButton = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [{ categories }, dispatch] = useCategories();

  const onClick = () => setDialogVisible(true);

  const isTagNameUnique = name => {
    let unique = true;
    categories.forEach((element, index, array) => {
      if (element.name === name) {
        unique = false;
      }
    });
    return unique;
  };

  const addTag = tagName => dispatch({ type: 'ADD_CATEGORY', payload: { name: tagName } });

  return (
    <TagNameInput
      visible={dialogVisible}
      setVisible={setDialogVisible}
      inputPlaceholder='Enter new category name'
      buttonVariant='success'
      buttonIconClass='fas fa-plus fa-fw'
      isInputValid={isTagNameUnique}
      invalidMessage='Tag name must be unique'
      onSubmitValid={addTag}
      placement='bottom'>
      <Button variant='success' onClick={onClick} className='my-2 p-1 px-2'>
        <i className={'fas fa-plus fa-fw'} />
      </Button>
    </TagNameInput>
  );
};

export default AddTagButton;
