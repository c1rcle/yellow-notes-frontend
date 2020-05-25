import React, { createContext, useReducer } from 'react';
import categoriesReducer from './reducer';
import dispatchAsync from './dispatchAsync';
const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [categories, dispatch] = useReducer(categoriesReducer, {
    categories: [],
    isLoading: false
  });

  return (
    <CategoriesContext.Provider value={[categories, dispatchAsync(dispatch)]}>
      {children}
    </CategoriesContext.Provider>
  );
}

export default function useCategories() {
  const context = React.useContext(CategoriesContext);

  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }

  return context;
}
