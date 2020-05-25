import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import useUser from '../../../../contexts/UserContext';
import CategoriesContainer from './CategoriesContainer';
import AddCategoryButton from './AddCategoryButton';

const CategoryBar = () => {
  const [{ isUserLoggedIn }] = useUser();

  return (
    <>
      {isUserLoggedIn && (
        <Modal.Header className='.category-bar border-0 px-2 py-0'>
          <AddCategoryButton />
          <Button
            variant='danger'
            // onClick={removecategoryPressed}
            className='my-2 ml-2 mr-3 p-1 px-2'>
            <i className={'fas fa-minus fa-fw'} />
          </Button>
          <CategoriesContainer />
        </Modal.Header>
      )}
    </>
  );
};

export default CategoryBar;
