import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Popover, { ArrowContainer } from 'react-tiny-popover';
import checkUrl from '../../../../utility/checkUrl';
import testImage from '../../../../utility/testImage';
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
    setShowImageInput(false);
  };

  const onSubmit = async () => {
    if (checkUrl(url)) {
      try {
        await testImage(url);
        onChangeImageUrl(url);
      } catch (err) {
        setUrl('');
        alert.show(err);
      }
    } else {
      setUrl('');
      alert.show('Invalid URL!');
    }
    setShowImageInput(false);
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
              disabled={imageUrl}
              value={url}
              onChange={onChange}
              placeholder='Paste image URL here'
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 8px 16px',
                border: 'none',
                borderRadius: '0.25rem 0 0 0.25rem'
              }}
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
