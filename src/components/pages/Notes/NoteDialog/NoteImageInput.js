import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Popover, { ArrowContainer } from 'react-tiny-popover';
import checkUrl from '../../../../utility/checkUrl';
import { useAlert } from 'react-alert';

const NoteImageInput = ({
  children,
  showImageInput,
  onChangeImageUrl,
  setShowImageInput,
  imageUrl
}) => {
  const alert = useAlert();
  const [url, setUrl] = useState('');

  const urlDidMount = () => {
    if (imageUrl) {
      setUrl(imageUrl);
    } else {
      setUrl('');
    }
  };

  useEffect(urlDidMount, [imageUrl]);

  const onChange = e => setUrl(e.target.value);

  const onDelete = () => {
    setUrl('');
    onChangeImageUrl('');
  };

  const onSubmit = () => {
    if (checkUrl(url)) {
      onChangeImageUrl(url);
    } else {
      alert.show('Invalid URL!');
    }
  };

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
              value={url}
              onChange={onChange}
              placeholder='Paste image URL here'
            />
            <InputGroup.Append>
              <Button
                onClick={imageUrl ? onDelete : onSubmit}
                variant={imageUrl ? 'danger' : 'success'}
                style={{ borderRadius: '0 0.25rem 0.25rem 0' }}>
                {imageUrl ? (
                  <i className='fas fa-times-circle fa-fw' />
                ) : (
                  <i className='fas fa-check'></i>
                )}
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </ArrowContainer>
      )}>
      {children}
    </Popover>
  );
};

export default NoteImageInput;
