import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { getVariant } from '../../../../utility/colorUtility';

const TodoItem = props => {
  const { task, checkTask, removeTask, color } = props;

  return (
    <>
      <ListGroup.Item style={{ backgroundColor: color }}>
        <Row>
          <Col xs='auto' className='ml-1 pr-0'>
            <Button
              className='button-shadow p-1 px-2'
              variant='primary'
              onClick={() => checkTask(task.id, !task.checked)}>
              <i className={`fas ${task.checked && 'fa-check'} fa-fw`} />
            </Button>
          </Col>
          <Col className={`m-auto trimText text-${getVariant(color)}`}>
            {task.checked ? <del>{task.content}</del> : task.content}
          </Col>
          <Col xs='auto' className='mr-1'>
            <Button
              className='button-shadow p-1 px-2'
              variant='danger'
              onClick={() => removeTask(task.id)}>
              <i className={'fas fa-trash fa-fw'} />
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

export default TodoItem;
