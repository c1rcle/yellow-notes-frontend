import React from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/layout/Navigation';
import Registration from './components/pages/Registration';
import Login from './components/pages/Login';
import Notes from './components/pages/Notes';
import NotFound from './components/pages/NotFound';
import FadingRoute from './components/common/FadingRoute';
import { UserProvider } from './contexts/UserContext';
import ErrorAlert from './components/common/ErrorAlert';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navigation />
        <Container>
          <ErrorAlert />
          <Switch>
            <FadingRoute exact key='0' path='/' component={Login} />
            <FadingRoute exact key='1' path='/registration' component={Registration} />
            <FadingRoute exact key='2' path='/notes' component={Notes} />
            <FadingRoute component={NotFound} />
          </Switch>
        </Container>
      </Router>
    </UserProvider>
  );
}

export default App;
