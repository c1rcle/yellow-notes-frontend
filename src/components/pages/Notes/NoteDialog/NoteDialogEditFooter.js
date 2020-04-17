import React, { useState, useRef } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import Moment from 'react-moment';
import ColorPicker from '../../../common/ColorPicker';

const NoteDialogEditFooter = props => {
  const { formData, setFormData, onDelete, note } = props;
  const [showPicker, setShowPicker] = useState(false);

  const onColorChange = color => {
    setFormData({ ...formData, color: color });
  };

  return (
    <Modal.Footer>
      <Form.Label style={{ marginRight: 'auto', fontSize: '0.95rem' }}>
        <Moment format='YYYY-MM-DD HH:mm'>{note.timestamp}</Moment>
      </Form.Label>
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
      <Button variant='outline-danger' onClick={onDelete} tabIndex='4'>
        <i className='fas fa-trash fa-fw' />
      </Button>
      <Button variant='outline-primary' type='submit' tabIndex='5'>
        <i className='fas fa-save fa-fw' />
      </Button>
    </Modal.Footer>
  );
};

export default NoteDialogEditFooter;
