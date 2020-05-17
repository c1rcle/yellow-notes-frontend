import React from 'react';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import useUser from '../../../../contexts/UserContext';

const TagBar = () => {
  const [{ isUserLoggedIn }] = useUser();

  return (
    <>
      {isUserLoggedIn && (
        <Modal.Header className='tag-bar pl-5 py-0'>
          <Row xs={12}>
            <Col xs='auto' className='px-2 py-2'>
              <Button
                variant='success'
                // onClick={addTagPressed}
                className='tag-bar p-1 px-2'>
                <i className={'fas fa-plus fa-fw'} />
              </Button>
            </Col>
            <Col xs='auto' className='px-1 py-2'>
              <Button
                variant='danger'
                // onClick={removeTagPressed}
                className='tag-bar p-1 px-2'>
                <i className={'fas fa-minus fa-fw'} />
              </Button>
            </Col>
          </Row>
        </Modal.Header>
      )}
    </>
  );
};

export default TagBar;
