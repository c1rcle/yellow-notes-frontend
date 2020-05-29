import { useState } from 'react';

const useFilters = () => {
  const [filters, setFilters] = useState();

  const setFilter = (categoryId, value) => {
    const filter = { categoryId: categoryId, checked: value };
    const index = filters.findIndex(f => f.categoryId === categoryId);
    index === -1 ? filters.push(filter) : (filters[index] = filter);
    setFilters(filters);
    console.log(filters);
  };

  return { filters, setFilter };
};
export default useFilters;
