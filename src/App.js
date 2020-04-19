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
import { NotesProvider } from './contexts/NotesContext';
import ErrorAlert from './components/common/ErrorAlert';

function App() {
  return (
    <Router>
      <UserProvider>
        <NotesProvider>
          <Navigation />
          <Container>
            <ErrorAlert />
            <Switch>
              <FadingRoute exact key='0' path='/' component={Login} />
              <FadingRoute exact key='1' path='/registration' component={Registration} />
              <FadingRoute key='2' path='/notes' component={Notes} />
              <FadingRoute component={NotFound} />
            </Switch>
          </Container>
        </NotesProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
