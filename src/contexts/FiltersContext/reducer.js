export default (state, { type, payload }) => {
  switch (type) {
    case 'NEED_UPDATE': {
      return { ...state, needUpdate: payload };
    }

    case 'SET_FILTER': {
      const filter = { categoryId: payload.categoryId, checked: payload.checked };
      const index = state.filters.findIndex(f => f.categoryId === payload.categoryId);
      index === -1 ? state.filters.push(filter) : (state.filters[index] = filter);
      return { ...state, filters: state.filters, needUpdate: true };
    }

    case 'REMOVE_FILTER': {
      const filters = state.filters.filter(f => f.categoryId !== payload.categoryId);
      return { ...state, filters: filters, needUpdate: true };
    }

    default:
      return state;
  }
};
