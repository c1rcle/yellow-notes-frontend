import React, { useEffect, useState } from 'react';
import CustomTooltip from './CustomTooltip';

const OverflowingTooltip = props => {
  const [overflow, setOverflow] = useState(false);
  const [hover, setHover] = useState(false);

  const { children, text } = props;

  let childRef = Array.isArray(children) ? children[0].ref : children.ref;
  if (childRef === null) {
    throw new Error('First child has to have a ref defined!');
  }

  useEffect(() => {
    if (childRef.current.offsetWidth < childRef.current.scrollWidth) {
      setOverflow(true);
    } else setOverflow(false);
  }, [childRef, hover]);

  return (
    <CustomTooltip show={hover && overflow} text={text} {...props}>
      {React.cloneElement(children, {
        onMouseOver: () => setHover(true),
        onMouseOut: () => setHover(false)
      })}
    </CustomTooltip>
  );
};

export default OverflowingTooltip;
