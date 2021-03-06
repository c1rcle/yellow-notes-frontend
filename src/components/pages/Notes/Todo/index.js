import React, { useEffect, useState } from 'react';
import { Form, ListGroup, Button, Row, Col } from 'react-bootstrap';
import TodoItem from './TodoItem';
import { getVariant, getFormColor, getBlackOrWhiteColor } from '../../../../utility/colorUtility';

const Todo = props => {
  const [tasks, setTasksState] = useState([]);
  const { isNoteNew, onChange, data, name, todoContent, setTodoContent } = props;

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

  const addTask = todoContent => {
    const uncheckedTasks = tasks.filter(t => !t.checked);
    const checkedTasks = tasks.filter(t => t.checked);
    let newId = 0;
    tasks.forEach(t => (t.id >= newId ? (newId = t.id + 1) : null));
    setTasks([
      ...uncheckedTasks,
      { id: newId, content: todoContent, checked: false },
      ...checkedTasks
    ]);
  };

  const addTaskPressed = event => {
    event.preventDefault();
    if (todoContent !== '') addTask(todoContent);
    setTodoContent('');
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const checkTask = (id, checked) => {
    let uncheckedTasks = tasks.filter(t => !t.checked);
    let checkedTasks = tasks.filter(t => t.checked);

    const task = tasks.find(t => t.id === id);
    if (task === undefined) return;

    if (!task.checked && checked) {
      uncheckedTasks = uncheckedTasks.filter(task => task.id !== id);
      task.checked = checked;
      checkedTasks.unshift(task);
    } else if (task.checked && !checked) {
      checkedTasks = checkedTasks.filter(task => task.id !== id);
      task.checked = checked;
      uncheckedTasks.push(task);
    } else return;

    setTasks([...uncheckedTasks, ...checkedTasks]);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      addTaskPressed(e);
    }
  };

  const taskItem = task => (
    <TodoItem
      blocked={data.isBlocked && !isNoteNew}
      key={task.id}
      task={task}
      removeTask={removeTask}
      checkTask={checkTask}
      color={data.color}
    />
  );

  return (
    <>
      <ListGroup variant='flush' className='pt-0'>
        {(data.isBlocked && !isNoteNew) || (
          <ListGroup.Item style={{ backgroundColor: data.color }}>
            <Row>
              <Col className='pr-0'>
                <div onKeyDown={e => onKeyDown(e)} onSubmit={addTaskPressed}>
                  <Form.Control
                    name='todo-content'
                    type='text'
                    placeholder='Enter a new task'
                    value={todoContent}
                    onChange={e => setTodoContent(e.target.value)}
                    tabIndex='2'
                    className={`text-${getVariant(data.color)}
                    placeholder-${getVariant(data.color)}`}
                    style={{ backgroundColor: getFormColor(data.color), borderWidth: '0' }}
                  />
                </div>
              </Col>
              <Col xs='auto' className='mr-1 py-2'>
                <Button
                  variant='success'
                  onClick={addTaskPressed}
                  className='p-1 px-2'
                  style={{ boxShadow: `0 0 2px 0 ${getBlackOrWhiteColor(data.color)}` }}>
                  <i className={'fas fa-plus fa-fw'} />
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        )}
        {tasks.filter(n => !n.checked).map(task => taskItem(task))}
        {tasks.filter(n => n.checked).map(task => taskItem(task))}
      </ListGroup>
    </>
  );
};

export default Todo;
