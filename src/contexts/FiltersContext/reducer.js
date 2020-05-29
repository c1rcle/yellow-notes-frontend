export default (state, { type, payload }) => {
  switch (type) {
    case 'NEED_UPDATE': {
      return { ...state, needUpdate: payload.needUpdate };
    }

    case 'SET_FILTER': {
      const filter = { categoryId: payload.categoryId, checked: payload.checked };
      const index = state.filters.findIndex(f => f.categoryId === payload.categoryId);
      index === -1 ? state.filters.push(filter) : (state.filters[index] = filter);
      console.log(state.filters);

      return { ...state, filters: state.filters, needUpdate: true };
    }

    default:
      return state;
  }
};
