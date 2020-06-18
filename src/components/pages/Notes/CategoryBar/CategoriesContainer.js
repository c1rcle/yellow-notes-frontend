import React, { useEffect } from 'react';
import { ListGroup, Container, Button } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import CategoryFilter from './CategoryFilter';
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
      {categories.length > 0 ? (
        <Scrollbars className='category-scrollbar d-flex justify-content-center' autoHide>
          <ListGroup
            horizontal
            style={{ width: categoryListWidth }}
            className='mx-auto d-flex flex-row justify-content-around py-1'>
            {categories.map(category => (
              <CategoryFilter category={category} key={category.categoryId} setFilter={setFilter} />
            ))}
          </ListGroup>
        </Scrollbars>
      ) : (
        <div className='lead'>
          <small>You have no categories. Click</small>
          <Button disabled variant='success' className='m-2 p-1 px-2'>
            <i className={'fas fa-plus fa-fw'} />
          </Button>
          <small>button to add one.</small>
        </div>
      )}
    </Container>
  );
};

export default CategoriesContainer;
