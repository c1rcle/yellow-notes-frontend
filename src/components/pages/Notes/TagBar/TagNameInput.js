import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Popover, { ArrowContainer } from 'react-tiny-popover';
import { useAlert } from 'react-alert';

const TagNameInput = ({
  children,
  visible,
  setVisible,
  inputPlaceholder,
  buttonVariant,
  buttonIconClass,
  isInputValid,
  invalidMessage,
  onSubmitValid
}) => {
  const alert = useAlert();
  const [content, setContent] = useState('');

  const onInputChange = e => setContent(e.target.value);

  const onSubmit = () => {
    if (isInputValid(content)) {
      onSubmitValid(content);
      setContent('');
      setVisible(false);
    } else {
      alert.show(invalidMessage);
    }
  };

  return (
    <Popover
      isOpen={visible}
      position='bottom'
      onClickOutside={() => setVisible(false)}
      containerClassName='custom-popover'
      content={({ position, targetRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor='#adb5bd'>
          <InputGroup className='mb-3 img-input'>
            <FormControl value={content} onChange={onInputChange} placeholder={inputPlaceholder} />
            <InputGroup.Append>
              <Button onClick={onSubmit} variant={buttonVariant}>
                <i className={buttonIconClass}></i>
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </ArrowContainer>
      )}>
      {children}
    </Popover>
  );
};

export default TagNameInput;
