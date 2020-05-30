import React from 'react';
import { Dropdown, DropdownButton, FormControl } from 'react-bootstrap';
import Popover, { ArrowContainer } from 'react-tiny-popover';

const CategoryComboBox = ({
  children,
  visible,
  setVisible,
  variant,
  title,
  onOptionClick,
  options
}) => {
  return (
    <Popover
      isOpen={visible}
      position='bottom'
      onClickOutside={() => setVisible(false)}
      containerClassName='custom-popover category-dropdown'
      content={({ position, targetRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor='#adb5bd'>
          {options.length > 0 ? (
            <DropdownButton
              id='dropdown-item-button'
              title={title}
              variant={variant}
              onClick={onOptionClick}>
              {options.map(category => (
                <Dropdown.Item as='button' key={category.categoryId} id={category.categoryId}>
                  {category.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          ) : (
            <FormControl disabled value='You have no categories' />
          )}
        </ArrowContainer>
      )}>
      {children}
    </Popover>
  );
};

export default CategoryComboBox;
