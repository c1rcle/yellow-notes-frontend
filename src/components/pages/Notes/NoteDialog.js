import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const NoteDialog = ({ dialogVisible, closeDialog, body }) => {
  const [show, setShow] = useState(dialogVisible);

  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      setShow(dialogVisible);
    } else didMountRef.current = true;
  }, [setShow, dialogVisible]);

  const onClose = e => closeDialog && closeDialog(e);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Note title</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onClose}>
          Close
        </Button>
        <Button variant='primary'>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NoteDialog;
