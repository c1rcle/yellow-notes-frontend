import React, { useEffect, useState } from 'react';
import { Form, ListGroup, Button, InputGroup, Row, Col } from 'react-bootstrap';
import TodoItem from './TodoItem';
import { getVariant, getFormColor } from '../../../../utility/colorUtility';

const Todo = props => {
  const [tasks, setTasksState] = useState([]);
  const [content, setContent] = useState('');
  const { onChange, data, name } = props;

  const setTasks = tasks => {
    onChange({ target: { name, value: JSON.stringify(tasks) } });
  };

  useEffect(() => {
    try {
      setTasksState(JSON.parse(data.content));
    } catch (error) {
      setTasksState([]);
    }
  }, [data.content]);

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
    <>
      <ListGroup variant='flush'>
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            removeTask={removeTask}
            checkTask={checkTask}
            color={data.color}
          />
        ))}

        <ListGroup.Item className='py-0' style={{ backgroundColor: data.color }}>
          <Row>
            <Col className='pr-0'>
              <div onSubmit={addTaskPressed}>
                <Form.Control
                  type='text'
                  placeholder='Enter a new task'
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  className={`text-${getVariant(data.color)} 
                    placeholder-${getVariant(data.color)}`}
                  tabIndex='1'
                  style={{ backgroundColor: getFormColor(data.color), borderWidth: '0' }}
                />
              </div>
            </Col>
            <Col xs='auto' className='mr-1 py-2'>
              <Button
                className='button-shadow p-1 pr-2 pl-2'
                variant='success'
                onClick={addTaskPressed}>
                <i className={'fas fa-plus fa-fw'} />
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Todo;
