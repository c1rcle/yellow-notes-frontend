import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import ColorPicker from '../../../common/ColorPicker';

const NoteDialogFooter = props => {
  const { isNoteNew, formData, setFormData, onDelete, note } = props;
  const [showPicker, setShowPicker] = useState(false);

  const onColorChange = color => {
    setFormData({ ...formData, color: color });
  };

  const toggleBlocked = () => {
    setFormData({ ...formData, isBlocked: !formData.isBlocked });
  };

  return (
    <Modal.Footer className='justify-content-start'>
      <ColorPicker
        color={formData.color}
        onColorChange={onColorChange}
        show={showPicker}
        setShow={setShowPicker}
        placement='bottom'>
        <Button
          disabled={formData.isBlocked && !isNoteNew}
          variant='outline-secondary'
          onClick={() => setShowPicker(!showPicker)}
          tabIndex='3'>
          <i className='fas fa-eye-dropper fa-fw' />
        </Button>
        <Button variant='outline-warning' onClick={toggleBlocked} tabIndex='4'>
          <i className={`fas ${formData.isBlocked ? 'fa-lock-open' : 'fa-lock'} fa-fw`} />
        </Button>
      </ColorPicker>
      {isNoteNew ? (
        <Button variant='outline-primary' type='submit' className='ml-auto' tabIndex='3'>
          Create
        </Button>
      ) : (
        <>
          <Button
            disabled={formData.isBlocked}
            variant='outline-danger'
            onClick={onDelete}
            tabIndex='5'>
            <i className='fas fa-times-circle fa-fw' />
          </Button>
          <div className='d-block d-sm-none ml-auto'>
            <Button variant='outline-primary' type='submit'>
              <i className='fas fa-save fa-fw mr-1' />
              Save
            </Button>
          </div>
        </>
      )}
      <div className="d-block d-sm-none break" />
      {isNoteNew || (
        <Form.Label className='ml-sm-auto d-flex flex-wrap' style={{ fontSize: '0.95rem' }}>
          <i className='my-auto far fa-calendar-alt pr-2' />
          <Moment format='YYYY-MM-DD HH:mm'>{note.modificationDate}</Moment>
        </Form.Label>
      )}
    </Modal.Footer>
  );
};

export default NoteDialogFooter;
