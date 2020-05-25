import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import TagFilter from './TagFilter';
import useCategories from '../../../../contexts/CategoriesContext';

const TagFiltersContainer = () => {
  const [{ categories }] = useCategories();
  const userTags = [
    'tag1',
    'tag2',
    'hejka',
    'naklejkafadfadfadfadfda',
    'cos tam',
    'tag1',
    'tag2',
    'hejka',
    'naklejka',
    'cos tam'
  ];
  const tagWidth = 100;
  const tagListWidth = tagWidth * categories.length;
  return (
    <Container className='mx-auto p-0 d-flex justify-content-center'>
      <Scrollbars
        className='d-flex justify-content-center'
        autoHide
        style={{ width: 'min(' + tagListWidth.toString() + 'px, 100%)', height: '3rem' }}>
        <ListGroup
          horizontal
          style={{ width: tagListWidth }}
          className='mx-auto  d-flex flex-row justify-content-around py-1'>
          {categories.map(tagName => (
            <TagFilter tagName={tagName} />
          ))}
        </ListGroup>
      </Scrollbars>
    </Container>
  );
};

export default TagFiltersContainer;
