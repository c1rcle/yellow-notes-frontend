import React, { Fragment } from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';

const TodoItem = props => {
  const { task, checkTask, removeTask } = props;

  return (
    <Fragment>
      <ListGroup.Item>
        <Row>
          <Col xs='auto' className='ml-1 pr-0'>
            <Button
              className='p-1 pr-2 pl-2'
              variant={task.checked ? 'primary' : 'outline-primary'}
              onClick={() => checkTask(task.id, !task.checked)}>
              <i className={`fas ${task.checked && 'fa-check'} fa-fw`} />
            </Button>
          </Col>
          <Col className='m-auto trimText'>
            {task.checked ? (
              <div className='text-muted'>
                <del>{task.content}</del>
              </div>
            ) : (
              task.content
            )}
          </Col>
          <Col xs='auto' className='mr-1'>
            <Button className='p-1 pr-2 pl-2' variant='danger' onClick={() => removeTask(task.id)}>
              <i className={'fas fa-trash fa-fw'} />
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </Fragment>
  );
};

export default TodoItem;
