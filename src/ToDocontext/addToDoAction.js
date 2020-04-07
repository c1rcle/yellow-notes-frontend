import React, { createContext, useState } from 'react';

const ToDoContext = createContext();

export const AppState = props => {
 const [dialogVisible, setDialogVisible] = useState(false);
 const [lists, setLists] = useState([]);

 const addList = name => {
  let newId = lists.length === 0 ? 0 : lists[lists.length - 1].id + 1;
  setLists([...lists, { id: newId, name: name }]);
 };

 const removeList = id => {
  setLists(lists.filter(list => list.id !== id));
 };

 return (
  <AppContext.Provider
   value={{
    dialogVisible,
    lists,
    setDialogVisible,
    addList,
    removeList
   }}>
   {props.children}
  </AppContext.Provider>
 );
};

export default ToDoContext;
