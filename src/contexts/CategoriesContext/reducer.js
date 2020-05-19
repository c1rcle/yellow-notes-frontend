export default (state, { type, payload }) => {
  switch (type) {
    case 'GET_CATEGORIES': {
      return { categories: [...payload], isLoading: false };
    }

    case 'ADD_CATEGORY': {
      return { categories: [...state.categories, payload], isLoading: false };
    }

    case 'REMOVE_CATEGORY': {
      if (!state.categories.some(c => c.categoryId === payload.categoryId)) return state;
      const categories = state.categories.filter(c => c.categoryId !== payload.categoryId);
      return { categories, isLoading: false };
    }

    default:
      return state;
  }
};
