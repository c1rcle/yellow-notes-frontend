import React, { useRef } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import { BlockPicker } from 'react-color';
import '../../styles/colorpicker.css';

const ColorPicker = props => {
  const { children, show, color, onColorChange } = props;

  const defaultColors = [
    '#ffef7f',
    '#ffc785',
    '#f1daf5',
    '#df7599',
    '#8f0018',
    '#7189bf',
    '#72d6c9',
    '#77da57',
    '#ededed',
    '#22222a'
  ];

  const onChangeComplete = color => {
    onColorChange(color.hex);
  };

  const ref = useRef();
  let firstChild = (Array.isArray(children) ? children[0] : children) || <div ref={ref} />;

  if (firstChild.ref === null) {
    throw new Error('First child has to have a ref defined!');
  }
  const target = firstChild.ref.current;

  return (
    <>
      {children || firstChild}
      <Overlay {...props} target={target} show={show}>
        <Popover content={true}>
          <BlockPicker
            color={color}
            colors={defaultColors}
            onChangeComplete={onChangeComplete}
            triangle='hide'
          />
        </Popover>
      </Overlay>
    </>
  );
};

export default ColorPicker;
