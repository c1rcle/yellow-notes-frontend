import React, { useRef } from 'react';
import { Overlay, Tooltip } from 'react-bootstrap';

const TooltipCustom = props => {
  const ref = useRef();

  let child = Array.isArray(props.children) ? props.children[0] : props.children;
  if (child === undefined) {
    child = <div ref={ref} />;
  } else if (child.ref === null) {
    throw new Error('First child has to have defined ref');
  }
  console.log('props', props);
  const { text, isOpen } = props;
  const target = child.ref.current;
  return (
    <>
      {props.children || child}
      <Overlay {...props} target={target} show={isOpen}>
        {props => <Tooltip {...props}>{text}</Tooltip>}
      </Overlay>
    </>
  );
};

export default TooltipCustom;
