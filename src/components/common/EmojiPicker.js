import React, { useState, useEffect } from 'react';
import Popover, { ArrowContainer } from 'react-tiny-popover';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

const EmojiPicker = ({ children, showEmojiPicker, setShowEmojiPicker, addEmoji }) => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onClick = (event, emojiObject) => setChosenEmoji(emojiObject);

  const appendEmoji = () => {
    if (chosenEmoji) {
      addEmoji(chosenEmoji.emoji);
    }
  };

  useEffect(appendEmoji, [chosenEmoji]);

  return (
    <Popover
      isOpen={showEmojiPicker}
      position='bottom'
      onClickOutside={() => setShowEmojiPicker(false)}
      containerClassName='custom-popover'
      content={({ position, targetRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor='#adb5bd'>
          <Picker onEmojiClick={onClick} skinTone={SKIN_TONE_MEDIUM_DARK} />
        </ArrowContainer>
      )}>
      {children}
    </Popover>
  );
};

export default EmojiPicker;
