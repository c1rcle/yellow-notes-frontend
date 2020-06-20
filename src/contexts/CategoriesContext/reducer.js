export default (state, { type, payload }) => {
  switch (type) {
    case 'LOADING_START': {
      return { ...state, isLoading: true };
    }

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

    case 'ERROR': {
      return {
        ...state,
        error: { type: payload.type, message: payload.msg },
        isLoading: false
      };
    }

    case 'CLEAR_ERROR': {
      return { ...state, error: null };
    }

    default:
      return state;
  }
};
