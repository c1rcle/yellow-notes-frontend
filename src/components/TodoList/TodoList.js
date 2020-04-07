import React, { Fragment, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import AppContext from '../context/AppContext';
import { ItemState } from '../context/ItemContext';
import TodoItem from './TodoItem';

const TodoList = () => {
 const appContext = useContext(AppContext);
 const { lists } = appContext;

 return (
  <Fragment>
   <Row>
    {lists.map(list => (
     <Col lg={4} className='form-group'>
      <ItemState>
       <TodoItem key={list.id} id={list.id} name={list.name} />
      </ItemState>
     </Col>
    ))}
   </Row>
  </Fragment>
 );
};

export default TodoList;
