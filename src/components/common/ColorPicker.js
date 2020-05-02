import React from 'react';
import { SketchPicker } from 'react-color';
import Popover, { ArrowContainer } from 'react-tiny-popover';
import '../../styles/colorpicker.css';

const ColorPicker = props => {
  const { children, show, setShow, color, onColorChange } = props;

  const defaultColors = [
    '#680D0D',
    '#740A58',
    '#020147',
    '#4948B3',
    '#3898AC',
    '#1A9658',
    '#4FDB46',
    '#F5FF11',
    '#F8C805',
    '#FF9700',
    '#E05E0D',
    '#663A1F',
    '#FFFFFF',
    '#B9A99E',
    '#413E3E',
    '#000000'
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
