import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import NoteContainer from './components/pages/notes/NoteContainer';

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/registration' component={Registration} />
          <Route exact path='/notes' component={NoteContainer} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
