import React from 'react';
import { UserProvider } from './UserContext';
import { NotesProvider } from './NotesContext';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from '../styles/AlertTemplate';

const alertOptions = {
  timeout: 3000,
  position: 'top center',
  containerStyle: {
    zIndex: 2000
  }
};

function Provider({ children }) {
  return (
    <UserProvider>
      <NotesProvider>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          {children}
        </AlertProvider>
      </NotesProvider>
    </UserProvider>
  );
}

export default Provider;
