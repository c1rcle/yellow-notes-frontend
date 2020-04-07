import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TodoItem from './TodoItem';

const TodoList = list => {
  return (
    <Row>
      {list.map(item => (
        <Col lg={4} className='form-group'>
          <TodoItem key={item.id} id={item.id} name={item.name} />
        </Col>
      ))}
    </Row>
  );
};

export default TodoList;
