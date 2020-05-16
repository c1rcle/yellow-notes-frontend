import React from 'react';
import Popover, { ArrowContainer } from 'react-tiny-popover';

const CustomTooltip = props => {
  const { children, text, show } = props;

  return (
    <Popover
      isOpen={show}
      containerClassName='custom-tooltip'
      {...props}
      content={({ position, targetRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor='#323232'>
          <div className='tooltip-content'>{text}</div>
        </ArrowContainer>
      )}>
      {children}
    </Popover>
  );
};

export default CustomTooltip;
