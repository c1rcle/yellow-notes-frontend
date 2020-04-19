import React from 'react';
import { SketchPicker } from 'react-color';
import Popover, { ArrowContainer } from 'react-tiny-popover';
import '../../styles/colorpicker.css';

const ColorPicker = props => {
  const { children, show, setShow, color, onColorChange } = props;

  const defaultColors = [
    '#ffef7f',
    '#ffc785',
    '#8F6132',
    '#f1daf5',
    '#df7599',
    '#D84447',
    '#8f0018',
    '#7189bf',
    '#7258AA',
    '#661F62',
    '#4A5A12',
    '#77da57',
    '#72d6c9',
    '#ededed',
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
