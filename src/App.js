import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/layout/Navigation';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import Notes from './components/pages/Notes';
import FadingRoute from './components/common/FadingRoute';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navigation />
        <Container>
          <Switch>
            <FadingRoute exact key='0' path='/' component={Login} />
            <FadingRoute exact key='1' path='/registration' component={Registration} />
            <FadingRoute exact key='2' path='/notes' component={Notes} />
          </Switch>
        </Container>
      </Router>
    </UserProvider>
  );
}

export default App;
