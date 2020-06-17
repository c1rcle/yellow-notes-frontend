import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import useCategories from '../../../contexts/CategoriesContext';
import { getFormColor } from '../../../utility/colorUtility';
import OverflowingBadge from '../OverflowingBadge';

const DialogTitle = React.forwardRef((props, ref) => {
  const [state, setState] = useState({ hover: false, focus: false });
  const [{ categories }] = useCategories();

  const getCategoryName = () => {
    return categories.find(c => c.categoryId === props.categoryId)?.name;
  };

  return (
    <>
      <Form.Control
        ref={ref}
        onMouseOver={() => setState({ ...state, hover: true })}
        onMouseOut={() => setState({ ...state, hover: false })}
        onFocus={() => setState({ ...state, focus: true })}
        onBlur={() => setState({ ...state, focus: false })}
        style={{
          backgroundColor: state.hover || state.focus ? getFormColor(props.color) : props.color
        }}
        {...props}
      />
      {!getCategoryName() || state.hover || state.focus || (
        <OverflowingBadge text={getCategoryName()} color={props.color} />
      )}
    </>
  );
});

export default DialogTitle;
