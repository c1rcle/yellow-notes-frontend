import React from 'react';
import { SketchPicker } from 'react-color';
import Popover, { ArrowContainer } from 'react-tiny-popover';
import '../../styles/colorpicker.css';

const ColorPicker = props => {
  const { children, show, setShow, color, onColorChange } = props;

  const defaultColors = [
    '#ededed',
    '#f1daf5',
    '#72d6c9',
    '#7189bf',
    '#7258AA',
    '#661F62',
    '#ffc785',
    '#ffef7f',
    '#df7599',
    '#D84447',
    '#8f0018',
    '#77da57',
    '#4A5A12',
    '#8F6132',
    '#646464',
    '#22222a'
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
