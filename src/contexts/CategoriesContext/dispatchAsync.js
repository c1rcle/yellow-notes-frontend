import addCategoryAction from './actions/addCategoryAction';
import getCategoriesAction from './actions/getCategoriesAction';
import removeCategoryAction from './actions/removeCategoryAction';

const dispatchAsync = dispatch => action => {
  switch (action.type) {
    case 'GET_CATEGORIES': {
      getCategoriesAction(action, dispatch)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    }
    case 'REMOVE_CATEGORY': {
      removeCategoryAction(action, dispatch)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    }
    case 'ADD_CATEGORY': {
      addCategoryAction(action, dispatch)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    }
    default:
      dispatch(action);
  }
};

export default dispatchAsync;
