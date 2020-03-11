import React, { createContext, useReducer } from 'react';
import userReducer from './reducer';
import dispatchAsync from './actions';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, {});

  return <UserContext.Provider value={[user, dispatchAsync(dispatch)]}>{children}</UserContext.Provider>;
}

export default function useUser() {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}
