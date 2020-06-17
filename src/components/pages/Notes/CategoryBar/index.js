import React from 'react';
import useUser from '../../../../contexts/UserContext';
import CategoriesContainer from './CategoriesContainer';
import AddCategoryButton from './AddCategoryButton';
import RemoveCategoryButton from './RemoveCategoryButton';

const CategoryBar = () => {
  const [{ isUserLoggedIn }] = useUser();

  return (
    <>
      {isUserLoggedIn && (
        <div className='category-bar px-3'>
          <div className='centered-container'>
            <AddCategoryButton />
            <RemoveCategoryButton />
          </div>
          <CategoriesContainer />
          <div className='centered-container d-none d-lg-block d-md-block' />
        </div>
      )}
    </>
  );
};

export default CategoryBar;
