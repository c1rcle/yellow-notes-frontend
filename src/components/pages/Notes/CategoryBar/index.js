import React from 'react';
import { Modal } from 'react-bootstrap';
import useUser from '../../../../contexts/UserContext';
import CategoriesContainer from './CategoriesContainer';
import AddCategoryButton from './AddCategoryButton';
import RemoveCategoryButton from './RemoveCategoryButton';

const CategoryBar = () => {
  const [{ isUserLoggedIn }] = useUser();

  return (
    <>
      {isUserLoggedIn && (
        <Modal.Header className='.category-bar border-0 px-2 py-0'>
          <AddCategoryButton />
          <RemoveCategoryButton />
          <CategoriesContainer />
        </Modal.Header>
      )}
    </>
  );
};

export default CategoryBar;
