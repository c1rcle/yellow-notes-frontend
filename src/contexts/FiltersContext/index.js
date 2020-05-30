import React, { createContext, useReducer } from 'react';
import filtersReducer from './reducer';

const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [filters, dispatch] = useReducer(filtersReducer, {
    filters: [],
    needUpdate: false
  });

  return <FiltersContext.Provider value={[filters, dispatch]}>{children}</FiltersContext.Provider>;
}

export default function useFilters() {
  const context = React.useContext(FiltersContext);

  if (context === undefined) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }

  return context;
}
