import React, { createContext, useReducer } from 'react';
import userReducer from './reducer';
import dispatchAsync from './dispatchAsync';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, {
    email: null,
    isLoading: false,
    isUserLoggedIn: false,
    error: null
  });

  return (
    <UserContext.Provider value={[user, dispatchAsync(dispatch)]}>{children}</UserContext.Provider>
  );
}

export default function useUser() {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}
