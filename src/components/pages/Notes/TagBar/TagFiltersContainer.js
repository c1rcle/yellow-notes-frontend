import React from 'react';
import { Form, ListGroup, Container } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

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
    <Container className='mx-auto p-0'>
      <Scrollbars autoHide style={{ width: '100%', height: '3rem' }}>
        <ListGroup horizontal className='mx-auto w-auto py-1'>
          {userTags.map(tagName => (
            <ListGroup.Item className='m-0 p-0'>
              <Form.Check inline className='tag-item p-2' type='checkbox' label={tagName} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Scrollbars>
    </Container>
  );
};

export default TagFiltersContainer;
