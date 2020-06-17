import React, { useRef } from 'react';
import { Badge } from 'react-bootstrap';
import OverflowingTooltip from './OverflowingTooltip';
import { getVariant, getFormColor } from '../../utility/colorUtility';

const OverflowingBadge = ({ text, color }) => {
  return (
    <OverflowingTooltip text={text} position='top'>
      <Badge
        pill
        ref={useRef()}
        className={`note-badge overflow-ellipsis text-${getVariant(color)} font-weight-bold`}
        style={{ backgroundColor: getFormColor(color) }}>
        {text}
      </Badge>
    </OverflowingTooltip>
  );
};

export default OverflowingBadge;
