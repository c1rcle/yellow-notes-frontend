import React, { useEffect } from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import CategoryFilter from './CategoryFilter';
import useCategories from '../../../../contexts/CategoriesContext';

const CategoriesContainer = () => {
  const [{ categories }, dispatch] = useCategories();

  useEffect(() => {
    dispatch({ type: 'GET_CATEGORIES' });
  }, []);

  const categoryWidth = 100;
  const categoryListWidth = categoryWidth * categories.length;
  return (
    <Container className='mx-auto p-0 d-flex justify-content-center'>
      <Scrollbars
        className='d-flex justify-content-center'
        autoHide
        style={{ width: 'min(' + categoryListWidth.toString() + 'px, 100%)', height: '3rem' }}>
        <ListGroup
          horizontal
          style={{ width: categoryListWidth }}
          className='mx-auto  d-flex flex-row justify-content-around py-1'>
          {categories.map(category => (
            <CategoryFilter category={category} key={category.categoryId} />
          ))}
        </ListGroup>
      </Scrollbars>
    </Container>
  );
};

export default CategoriesContainer;
