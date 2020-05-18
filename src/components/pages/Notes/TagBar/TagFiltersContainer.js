import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';

const TagFiltersContainer = () => {
  const userTags = [
    'tag1',
    'tag2',
    'hejka',
    'naklejka',
    'cos tam',
    'tag1',
    'tag2',
    'hejka',
    'naklejka',
    'cos tam'
  ];

  return (
    <>
      <ListGroup horizontal className='mx-auto p-0'>
        {userTags.map(tagName => (
          <ListGroup.Item className='m-0 p-0'>
            <Form.Check inline className='p-2' type='checkbox' label={tagName} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default TagFiltersContainer;
