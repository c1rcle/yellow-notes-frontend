import React, { useEffect, useState } from 'react';
import CustomTooltip from './CustomTooltip';

const OverflowingTooltip = props => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [hover, setHover] = useState(false);

  const { children, text } = props;

  let childRef = Array.isArray(children) ? children[0].ref : children.ref;
  if (childRef === null) {
    throw new Error('First child has to have a ref defined!');
  }

  useEffect(() => {
    if (childRef.current.offsetWidth < childRef.current.scrollWidth) {
      setIsOverflowing(true);
    } else setIsOverflowing(false);
  }, [childRef, hover]);

  return (
    <CustomTooltip show={hover && isOverflowing} text={text} {...props}>
      {React.cloneElement(children, {
        onMouseOver: () => setHover(true),
        onMouseOut: () => setHover(false)
      })}
    </CustomTooltip>
  );
};

export default OverflowingTooltip;
