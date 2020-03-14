import React, { useRef } from 'react';
import { Overlay, Tooltip } from 'react-bootstrap';

const TooltipCustom = props => {
  const { children, text, show } = props;

  const ref = useRef();
  let firstChild = (Array.isArray(children) ? children[0] : children) || (
    <div ref={ref} />
  );

  if (firstChild.ref === null) {
    throw new Error('First child has to have a ref defined!');
  }
  const target = firstChild.ref.current;

  return (
    <>
      {children || firstChild}
      <Overlay {...props} target={target} show={show}>
        <Tooltip {...props}>{text}</Tooltip>
      </Overlay>
    </>
  );
};

export default TooltipCustom;
