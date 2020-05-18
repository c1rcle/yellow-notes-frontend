import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import useUser from '../../../../contexts/UserContext';
import TagFiltersContainer from './TagFiltersContainer';

const TagBar = () => {
  const [{ isUserLoggedIn }] = useUser();

  return (
    <>
      {isUserLoggedIn && (
        <Modal.Header className='h-10 tag-bar px-5 py-0'>
          <Button
            variant='success'
            // onClick={addTagPressed}
            className='my-2 p-1 px-2'>
            <i className={'fas fa-plus fa-fw'} />
          </Button>
          <Button
            variant='danger'
            // onClick={removeTagPressed}
            className='my-2 ml-2 mr-3 p-1 px-2'>
            <i className={'fas fa-minus fa-fw'} />
          </Button>
          <TagFiltersContainer />
          <Button variant='' className='invisible my-2 mr-2 p-1 px-2'>
            <i className={'fas fa-plus fa-fw'} />
          </Button>
          <Button variant='' className='invisible my-2 p-1 px-2'>
            <i className={'fas fa-minus fa-fw'} />
          </Button>
        </Modal.Header>
      )}
    </>
  );
};

export default TagBar;
