import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import useUser from '../../../../contexts/UserContext';
import TagFiltersContainer from './TagFiltersContainer';
import AddTagButton from './AddTagButton';

const TagBar = () => {
  const [{ isUserLoggedIn }] = useUser();

  return (
    <>
      {isUserLoggedIn && (
        <Modal.Header className='tag-bar border-0 px-2 py-0'>
          <AddTagButton />
          <Button
            variant='danger'
            // onClick={removeTagPressed}
            className='my-2 ml-2 mr-3 p-1 px-2'>
            <i className={'fas fa-minus fa-fw'} />
          </Button>
          <TagFiltersContainer />
        </Modal.Header>
      )}
    </>
  );
};

export default TagBar;
