import React, { useRef } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import { BlockPicker } from 'react-color';
import { useState } from 'react';
import '../../styles/colorpicker.css';

const ColorPicker = props => {
  const { children, show } = props;
  const [color, setColor] = useState('#f8f9fa');

  const onColorChange = color => {
    setColor(color.hex);
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
        <Popover content={true} on>
          <BlockPicker color={color} onChangeComplete={onColorChange} triangle='hide' />
        </Popover>
      </Overlay>
    </>
  );
};

export default ColorPicker;
