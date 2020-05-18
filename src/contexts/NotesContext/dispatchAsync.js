import getNotesAction from './actions/getNotesAction';
import getNoteAction from './actions/getNoteAction';
import addNoteAction from './actions/addNoteAction';
import editNoteAction from './actions/editNoteAction';
import removeNoteAction from './actions/removeNoteAction';
import addCategoryAction from './actions/addCategoryAction';
import getCategoriesAction from './actions/getCategoriesAction';
import removeCategoryAction from './actions/removeCategoryAction';

const dispatchAsync = dispatch => action => {
  switch (action.type) {
    case 'GET_NOTES': {
      getNotesAction(action, dispatch)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    }
    case 'GET_NOTE': {
      getNoteAction(action, dispatch)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    }
    case 'ADD_NOTE': {
      addNoteAction(action, dispatch)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    }
    case 'EDIT_NOTE': {
      editNoteAction(action, dispatch)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    }
    case 'REMOVE_NOTE': {
      removeNoteAction(action, dispatch)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    }
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
