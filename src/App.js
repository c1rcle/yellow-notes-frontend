import React from 'react';
import Registration from './components/registration/Registration';
import { RegistrationState } from './contexts/registration/RegistrationContext';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Container>
        <RegistrationState>
          <Registration />
        </RegistrationState>
      </Container>
    </div>
  );
}

export default App;
