import React, { useRef } from 'react';
import { Badge } from 'react-bootstrap';
import OverflowTooltip from './OverflowTooltip';
import { getVariant, getFormColor } from '../../utility/colorUtility';

const OverflowingBadge = ({ text, color }) => {
  return (
    <OverflowTooltip text={text} position='top'>
      <Badge
        pill
        ref={useRef()}
        className={`note-badge overflow-ellipsis text-${getVariant(color)} font-weight-bold`}
        style={{ backgroundColor: getFormColor(color) }}>
        {text}
      </Badge>
    </OverflowTooltip>
  );
};

export default OverflowingBadge;
