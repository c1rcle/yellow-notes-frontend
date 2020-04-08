import React, { useEffect, useState } from 'react';
import { Card, Form, ListGroup, Button, InputGroup } from 'react-bootstrap';
import Task from './Task';

const TodoItem = props => {
  const [tasks, setTasksState] = useState([]);
  const [content, setContent] = useState('');
  const { onChange, value, name } = props;

  const setTasks = tasks => {
    onChange({ target: { name, value: JSON.stringify(tasks) } });
  };

  useEffect(() => {
    try {
      setTasksState(JSON.parse(value));
    } catch (error) {
      setTasksState([]);
    }
  }, [value]);

  const addTask = content => {
    let newId = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1;
    setTasks([...tasks, { id: newId, content: content, checked: false }]);
  };

  const addTaskPressed = event => {
    event.preventDefault();
    if (content !== '') addTask(content);
    setContent('');
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const checkTask = (id, checked) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, checked: checked } : task)));
  };

  return (
    <Card>
      <Card.Body>
        <div onSubmit={addTaskPressed}>
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
        </div>
      </Card.Body>

      <ListGroup variant='flush'>
        {tasks.map(task => (
          <Task key={task.id} task={task} removeTask={removeTask} checkTask={checkTask} />
        ))}
      </ListGroup>
    </Card>
  );
};

export default TodoItem;
