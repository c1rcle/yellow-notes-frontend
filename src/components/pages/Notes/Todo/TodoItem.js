import React from 'react';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { getVariant, getFormColor, getBlackOrWhiteColor } from '../../../../utility/colorUtility';

const TodoItem = props => {
  const { task, checkTask, removeTask, color } = props;

  return (
    <>
      <ListGroup.Item style={{ backgroundColor: color }}>
        <Row>
          <Col xs='auto' className='ml-1 pr-0'>
            <Button
              variant=''
              className='py-1 px-2'
              style={{
                backgroundColor: getFormColor(color),
                boxShadow: `0 0 2px 0 ${getBlackOrWhiteColor(color)}`
              }}
              onClick={() => checkTask(task.id, !task.checked)}>
              <i
                style={{
                  color: getBlackOrWhiteColor(color),
                  backgroundColor: getFormColor(color)
                }}
                className={`fas ${task.checked && 'fa-check'} fa-fw`}
              />
            </Button>
          </Col>
          <Col className={`m-auto trimText text-${getVariant(color)}`}>
            {task.checked ? <del>{task.content}</del> : task.content}
          </Col>
          <Col xs='auto' className='mr-1'>
            <Button
              className='py-1 px-2'
              variant='danger'
              style={{
                boxShadow: `0 0 2px 0 ${getBlackOrWhiteColor(color)}`
              }}
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
