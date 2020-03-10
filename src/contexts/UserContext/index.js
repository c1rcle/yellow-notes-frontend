import React, { createContext, useReducer } from 'react';
import userReducer from './reducer';
import { actionRegister, actionLogin } from './actions';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, {});

  const dispatchAsync = action => {
    switch (action.type) {
      case 'REGISTER':
        actionRegister(action).then(a => dispatch(a));
        break;
      case 'LOGIN':
        actionLogin(action).then(a => dispatch(a));
        break;
      default:
        dispatch(action);
    }
  };

  return <UserContext.Provider value={[user, dispatchAsync]}>{children}</UserContext.Provider>;
}

export default function useUser() {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}
