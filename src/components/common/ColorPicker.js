import React from 'react';
import { SketchPicker } from 'react-color';
import Popover, { ArrowContainer } from 'react-tiny-popover';
import '../../styles/colorpicker.css';

const ColorPicker = props => {
  const { children, show, setShow, color, onColorChange } = props;

  const defaultColors = [
    '#8f0018',
    '#fc9420',
    '#eed014',
    '#53923f',
    '#496fc4',
    '#661f62',
    '#22222a',
    '#c4c4c1',
    '#d84447',
    '#ffc785',
    '#ffef7f',
    '#77da57',
    '#87a1dd',
    '#9c6498',
    '#646464',
    '#ededed'
  ];

  const onChangeComplete = color => {
    onColorChange(color.hex);
  };

  return (
    <Popover
      isOpen={show}
      position='bottom'
      onClickOutside={() => setShow(false)}
      containerClassName='custom-popover'
      content={({ position, targetRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor='#adb5bd'>
          <SketchPicker
            color={color}
            presetColors={defaultColors}
            onChangeComplete={onChangeComplete}
            disableAlpha={true}
            className='picker-input'
          />
        </ArrowContainer>
      )}>
      {children}
    </Popover>
  );
};

export default ColorPicker;
