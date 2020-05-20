import React from 'react';
import { UserProvider } from './UserContext';
import { NotesProvider } from './NotesContext';
import { CategoriesProvider } from './CategoriesContext';
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
        <CategoriesProvider>
          <AlertProvider template={AlertTemplate} {...alertOptions}>
            {children}
          </AlertProvider>
        </CategoriesProvider>
      </NotesProvider>
    </UserProvider>
  );
}

export default Provider;
