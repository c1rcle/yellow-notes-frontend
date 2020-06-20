import React from 'react';
import { Button } from 'react-bootstrap';
import Spinner from '.././../../common/Spinner';
import useCategories from '../../../../contexts/CategoriesContext';

const CategoryCaption = () => {
  const [{ isLoading }] = useCategories();

  return (
    <>
      <div className='category-caption'>
        {isLoading ? (
          <Spinner size='xl' className='m-2' variant='primary' />
        ) : (
          <div className='lead'>
            <small>You have no categories. Click</small>
            <Button disabled variant='success' className='m-2 p-1 px-2'>
              <i className={'fas fa-plus fa-fw'} />
            </Button>
            <small>button to add one.</small>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryCaption;
