import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Popover, { ArrowContainer } from 'react-tiny-popover';

const NoteImageInput = ({
  children,
  showImageInput,
  onChangeImageUrl,
  setShowImageInput,
  imageUrl
}) => {
  const onChange = e => onChangeImageUrl(e.target.value);

  const onDelete = () => onChangeImageUrl('');

  return (
    <Popover
      isOpen={showImageInput}
      position='bottom'
      onClickOutside={() => setShowImageInput(false)}
      containerClassName='custom-popover'
      content={({ position, targetRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor='#adb5bd'>
          <InputGroup className='mb-3'>
            <FormControl
              type='url'
              value={imageUrl}
              onChange={onChange}
              placeholder='Paste image URL here'
            />
            {imageUrl && (
              <InputGroup.Append>
                <Button
                  onClick={onDelete}
                  variant='danger'
                  style={{ borderRadius: '0 0.25rem 0.25rem 0' }}>
                  <i className='fas fa-times-circle fa-fw' />
                </Button>
              </InputGroup.Append>
            )}
          </InputGroup>
        </ArrowContainer>
      )}>
      {children}
    </Popover>
  );
};

export default NoteImageInput;
