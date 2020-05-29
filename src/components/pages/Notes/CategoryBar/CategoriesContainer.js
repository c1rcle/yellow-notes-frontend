import React, { useEffect, useState } from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import CategoryFilter from './CategoryFilter';
import useCategories from '../../../../contexts/CategoriesContext';
import useFilters from '../../../../hooks/useFilters';

const CategoriesContainer = () => {
  const [{ categories }, dispatch] = useCategories();
  // const [filters, setFilters] = useState([]);
  const { setFilter } = useFilters();

  useEffect(() => {
    dispatch({ type: 'GET_CATEGORIES' });
  }, []);

  // const setFilter = (categoryId, value) => {
  //   const filter = { categoryId: categoryId, checked: value };
  //   const index = filters.findIndex(f => f.categoryId === categoryId);
  //   index === -1 ? filters.push(filter) : (filters[index] = filter);
  //   setFilters(filters);
  //   console.log(filters);
  // };

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
            <CategoryFilter category={category} key={category.categoryId} setFilter={setFilter} />
          ))}
        </ListGroup>
      </Scrollbars>
    </Container>
  );
};

export default CategoriesContainer;
