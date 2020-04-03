import getNotesAction from './actions/getNotesAction';
import addNoteAction from './actions/addNoteAction';
import editNoteAction from './actions/editNoteAction';
import removeNoteAction from './actions/removeNoteAction';

const dispatchAsync = dispatch => action => {
  switch (action.type) {
    case 'GET_NOTES': {
      getNotesAction(action, dispatch)
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
    default:
      dispatch(action);
  }
};

export default dispatchAsync;
