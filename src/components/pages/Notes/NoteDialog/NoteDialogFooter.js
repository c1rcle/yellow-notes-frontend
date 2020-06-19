import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import Moment from 'react-moment';
import ColorPicker from '../../../common/ColorPicker';
import EmojiPicker from '../../../common/EmojiPicker';
import NoteImageInput from './NoteImageInput';
import NoteCategoryButton from './NoteCategoryButton';
import SmallButton from '../../../common/SmallButton';

const NoteDialogFooter = props => {
  const { isNoteNew, note, formData, setFormData, onDelete, todoContent, setTodoContent } = props;
  const [showPicker, setShowPicker] = useState(false);
  const [showImageInput, setShowImageInput] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onChangeImageUrl = imageUrl => {
    setFormData({ ...formData, imageUrl });
  };

  const onColorChange = color => {
    setFormData({ ...formData, color: color });
  };

  const addEmoji = emoji => {
    if (props.focusedElement === 'todo-content') {
      setTodoContent(todoContent + emoji);
    } else if (props.focusedElement === 'title') {
      setFormData({ ...formData, title: formData.title + emoji });
    } else {
      setFormData({ ...formData, content: formData.content + emoji });
    }
  };

  const toggleBlocked = () => {
    setFormData({ ...formData, isBlocked: !formData.isBlocked });
  };

  const assignCategory = categoryId => {
    setFormData({ ...formData, categoryId: categoryId });
  };

  return (
    <Modal.Footer className='justify-content-start'>
      <ColorPicker
        color={formData.color}
        onColorChange={onColorChange}
        show={showPicker}
        setShow={setShowPicker}
        placement='bottom'>
        <SmallButton
          disabled={formData.isBlocked && !isNoteNew}
          variant='outline-secondary'
          onClick={() => setShowPicker(!showPicker)}
          tabIndex='3'>
          <i className='fas fa-eye-dropper fa-fw' />
        </SmallButton>
      </ColorPicker>
      <NoteImageInput
        imageUrl={formData.imageUrl}
        onChangeImageUrl={onChangeImageUrl}
        showImageInput={showImageInput}
        setShowImageInput={setShowImageInput}
        placement='bottom'>
        <SmallButton
          disabled={formData.isBlocked && !isNoteNew}
          variant='outline-success'
          onClick={() => setShowImageInput(!showImageInput)}>
          <i className='far fa-image fa-fw' />
        </SmallButton>
      </NoteImageInput>
      <EmojiPicker
        showEmojiPicker={showEmojiPicker}
        setShowEmojiPicker={setShowEmojiPicker}
        addEmoji={addEmoji}
        content={formData.content}
        placement='bottom'>
        <SmallButton
          disabled={formData.isBlocked && !isNoteNew}
          variant='outline-primary'
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
          <i className='far fa-grin fa-fw'></i>
        </SmallButton>
      </EmojiPicker>
      <NoteCategoryButton
        setCategoryId={assignCategory}
        isNoteNew={isNoteNew}
        disabled={formData.isBlocked && !isNoteNew}
      />
      <SmallButton variant='outline-warning' onClick={toggleBlocked} tabIndex='4'>
        <i className={`fas ${formData.isBlocked ? 'fa-lock' : 'fa-lock-open'} fa-fw`} />
      </SmallButton>
      {isNoteNew || (
        <SmallButton
          disabled={formData.isBlocked}
          variant='outline-danger'
          onClick={onDelete}
          tabIndex='5'>
          <i className='fas fa-times-circle fa-fw' />
        </SmallButton>
      )}
      {isNoteNew && (
        <SmallButton
          variant='outline-primary'
          className='ml-auto small-button'
          type='submit'
          tabIndex='3'>
          Create
        </SmallButton>
      )}
      {isNoteNew || (
        <>
          <div className='d-block d-sm-none ml-auto'>
            <SmallButton variant='outline-primary' type='submit'>
              <i className='fas fa-save fa-fw' />
            </SmallButton>
          </div>
          <div className='d-block d-sm-none break' />
          <Form.Label className='ml-sm-auto d-flex flex-wrap' style={{ fontSize: '0.95rem' }}>
            <i className='my-auto far fa-calendar-alt pr-2' />
            <Moment format='YYYY-MM-DD HH:mm'>{note.modificationDate}</Moment>
          </Form.Label>
        </>
      )}
    </Modal.Footer>
  );
};

export default NoteDialogFooter;
