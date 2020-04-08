import React, { createContext, useState } from 'react';

const ItemContext = createContext();

export const ItemState = props => {
  const [tasks, setTasks] = useState([]);

  const addTask = content => {
    let newId = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1;
    setTasks([...tasks, { id: newId, content: content, checked: false }]);
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const checkTask = (id, checked) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, checked: checked } : task)));
  };

  return (
    <ItemContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        checkTask
      }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
