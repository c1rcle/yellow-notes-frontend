import React from 'react';
import Registration from './components/registration';
import Login from './components/Login';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/registration' component={Registration} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
