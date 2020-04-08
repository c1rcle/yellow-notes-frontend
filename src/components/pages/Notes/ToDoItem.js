import React, { Fragment, useContext, useState } from 'react';
import { Card, Form, ListGroup, Button, InputGroup } from 'react-bootstrap';
import Task from './Task';
import ItemContext from '../../../context/NotesContext/ItemContext';

const TodoItem = props => {
  const itemContext = useContext(ItemContext);
  const { addTask, tasks } = itemContext;
  const [content, setContent] = useState('');

  const addTaskPressed = event => {
    event.preventDefault();
    if (content !== '') addTask(content);
    setContent('');
  };

  return (
    <Fragment>
      <Card>
        <Card.Body>
          <Form onSubmit={addTaskPressed}>
            <InputGroup>
              <Form.Control
                type='text'
                placeholder='Enter a new task'
                value={content}
                onChange={e => setContent(e.target.value)}
              />
              <InputGroup.Append>
                <Button variant='success' onClick={addTaskPressed}>
                  Add
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Card.Body>

        <ListGroup variant='flush'>
          {tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </ListGroup>
      </Card>
    </Fragment>
  );
};

export default TodoItem;
