import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { getVariant, getFormColor, getBlackOrWhiteColor } from '../../../../utility/colorUtility';

const TodoItem = props => {
  const { task, checkTask, removeTask, color, blocked } = props;

  return (
    <>
      <ListGroup.Item style={{ backgroundColor: color }}>
        <Row>
          <Col xs='auto' className='ml-1 pr-0'>
            <Button
              disabled={blocked}
              variant=''
              onClick={() => checkTask(task.id, !task.checked)}
              className='py-1 px-2'
              style={{
                backgroundColor: getFormColor(color),
                boxShadow: `0 0 2px 0 ${getBlackOrWhiteColor(color)}`
              }}>
              <i
                className={`fas ${task.checked && 'fa-check'} fa-fw`}
                style={{
                  color: getBlackOrWhiteColor(color),
                  backgroundColor: getFormColor(color)
                }}
              />
            </Button>
          </Col>
          <Col className={`m-auto trimText text-${getVariant(color)}`}>
            {task.checked ? <del>{task.content}</del> : task.content}
          </Col>
          <Col xs='auto' className='mr-1'>
            <Button
              disabled={blocked}
              variant='danger'
              onClick={() => removeTask(task.id)}
              className='py-1 px-2'
              style={{ boxShadow: `0 0 2px 0 ${getBlackOrWhiteColor(color)}` }}>
              <i className={'fas fa-trash fa-fw'} />
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

export default TodoItem;
