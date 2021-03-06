import React, { useEffect } from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import CategoryFilter from './CategoryFilter';
import CategoryCaption from './CategoryCaption';
import useCategories from '../../../../contexts/CategoriesContext';
import useFilters from '../../../../contexts/FiltersContext';

const CategoriesContainer = () => {
  const [{ categories }, dispatch] = useCategories();
  const { setFilter } = useFilters();

  const getCategories = () => {
    dispatch({ type: 'GET_CATEGORIES' });
  };
  useEffect(getCategories, []);

  const categoryWidth = 100;
  const categoryListWidth = categoryWidth * categories.length;

  return (
    <Container className='p-0 d-flex justify-content-center'>
      <Scrollbars
        className='category-scrollbar d-flex justify-content-center'
        style={{ textAlign: 'center' }}
        autoHide>
        {categories.length > 0 ? (
          <ListGroup
            horizontal
            style={{ width: categoryListWidth }}
            className='mx-auto d-flex flex-row justify-content-around py-1'>
            {categories.map(category => (
              <CategoryFilter category={category} key={category.categoryId} setFilter={setFilter} />
            ))}
          </ListGroup>
        ) : (
          <CategoryCaption />
        )}
      </Scrollbars>
    </Container>
  );
};

export default CategoriesContainer;
