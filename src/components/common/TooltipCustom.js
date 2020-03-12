import React, { useRef } from 'react';
import { Overlay, Tooltip } from 'react-bootstrap';

const TooltipCustom = props => {
  const ref = useRef();

  let firstChild = (Array.isArray(props.children)
    ? props.children[0]
    : props.children) || <div ref={ref} />;

  if (firstChild.ref === null) {
    throw new Error('First child has to have defined ref');
  }

  const { text, show } = props;
  const target = firstChild.ref.current;

  return (
    <>
      {props.children || firstChild}
      <Overlay {...props} target={target} show={show}>
        <Tooltip {...props}>{text}</Tooltip>
      </Overlay>
    </>
  );
};

export default TooltipCustom;
