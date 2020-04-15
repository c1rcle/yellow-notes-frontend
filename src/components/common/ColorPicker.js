import React, { useRef } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import { CirclePicker, HuePicker, AlphaPicker } from 'react-color';

const ColorPicker = props => {
  const { children, show } = props;

  const ref = useRef();
  let firstChild = (Array.isArray(children) ? children[0] : children) || (
    <div ref={ref} />
  );

  if (firstChild.ref === null) {
    throw new Error('First child has to have a ref defined!');
  }
  const target = firstChild.ref.current;

  return (
    <Overlay {...props} target={target} show={show}>
      <Popover>
        <Popover.Title as='h3'></Popover.Title>
        <Popover.Content>
          <CirclePicker />
          <HuePicker />
          <AlphaPicker />
        </Popover.Content>
      </Popover>
    </Overlay>
  );
};

export default ColorPicker;
