import addNoteAction from '../NotesContext/actions/addNoteAction';

const dispatchAsync = dispatch => action => {
  switch (action.type) {
    case 'ADD_NOTE':
      addNoteAction(action, dispatch)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    default:
      dispatch(action);
  }
};

export default dispatchAsync;
