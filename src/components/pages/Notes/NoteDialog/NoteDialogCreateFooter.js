import React, { useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ColorPicker from '../../../common/ColorPicker';

const NoteDialogCreateFooter = props => {
  const { formData, setFormData } = props;
  const [showPicker, setShowPicker] = useState(false);

  const onColorChange = color => {
    setFormData({ ...formData, color: color });
  };

  return (
    <Modal.Footer>
      <ColorPicker
        color={formData.color}
        onColorChange={onColorChange}
        show={showPicker}
        setShow={setShowPicker}
        placement='bottom'>
        <Button
          variant='outline-secondary'
          onClick={() => setShowPicker(!showPicker)}
          tabIndex='3'
          ref={useRef()}>
          <i className='fas fa-eye-dropper fa-fw' />
        </Button>
      </ColorPicker>
      <Button variant='outline-primary' type='submit' tabIndex='3'>
        Create
      </Button>
    </Modal.Footer>
  );
};

export default NoteDialogCreateFooter;
