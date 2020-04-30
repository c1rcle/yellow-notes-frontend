import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { getFormColor } from '../../utility/colorUtility';

const HoverableControl = React.forwardRef((props, ref) => {
  const [state, setState] = useState({ hover: false, focus: false });

  return (
    <Form.Control
      ref = {ref}
      onMouseOver={() => setState({ ...state, hover: true })}
      onMouseOut={() => setState({ ...state, hover: false })}
      onFocus={() => setState({ ...state, focus: true })}
      onBlur={() => setState({ ...state, focus: false })}
      style={{
        backgroundColor: state.hover || state.focus ? getFormColor(props.color) : props.color
      }}
      {...props}
    />
  );
});

export default HoverableControl;
