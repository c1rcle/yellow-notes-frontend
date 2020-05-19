import React from 'react';
import { Form, ListGroup, Container } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

const TagFiltersContainer = () => {
  const userTags = [
    'tag1',
    'tag2',
    'hejka',
    'naklejkafadfadfadfadfda',
    'cos tam',
    'tag1'
    // 'tag2',
    // 'hejka',
    // 'naklejka',
    // 'cos tam'
  ];

  const tagWidth = 100;
  const tagListWidth = tagWidth * userTags.length;
  return (
    //item ma miec stala szerokosc
    //jak bedzie uciety to dac overflow tooltip
    //dac ladne checkboxy
    <Container className='mx-auto p-0 justify-content-center'>
      <Scrollbars autoHide style={{ width: tagListWidth, height: '3rem' }}>
        <ListGroup horizontal className='mx-auto justify-content-between d-flex py-1'>
          {userTags.map(tagName => (
            <ListGroup.Item className='m-0 p-0'>
              <Form.Check
                inline
                className='tag-item m-0 p-0 py-2'
                type='checkbox'
                label={tagName}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Scrollbars>
    </Container>
  );
};

export default TagFiltersContainer;
