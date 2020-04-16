import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';

const TodoItem = props => {
  const { task, checkTask, removeTask, color } = props;

  return (
    <>
      <ListGroup.Item style={{backgroundColor: color}}>
        <Row>
          <Col xs='auto' className='ml-1 pr-0'>
            <Button
              variant={task.checked ? 'success' : 'outline-success'}
              onClick={() => checkTask(task.id, !task.checked)}>
              <i className={`fas fa-${task.checked ? 'check' : 'times'} fa-fw`} />
            </Button>
          </Col>
          <Col className='m-auto trimText'>
            {task.checked ? <div className='text-muted'>{task.content}</div> : task.content}
          </Col>
          <Col xs='auto' className='mr-1'>
            <Button variant='danger' onClick={() => removeTask(task.id)}>
              <i className={'fas fa-trash fa-fw'} />
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

export default TodoItem;
