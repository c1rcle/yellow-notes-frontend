//import yellowNotesApi from '../../apis/yellowNotesApi';
import registerAction from './actions/registerAction';
import loginAction from './actions/loginAction';
import addNoteAction from './actions/addNoteAction';
import checkTokenAction from './actions/checkTokenAction';

const dispatchAsync = dispatch => action => {
  switch (action.type) {
    case 'CHECK_TOKEN':
      checkTokenAction(action, dispatch)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    case 'REGISTER':
      registerAction(action, dispatch)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    case 'LOGIN':
      dispatch({ type: 'LOADING_START' });
      loginAction(action, dispatch, dispatch)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    case 'LOGOUT':
      localStorage.removeItem('token');
      dispatch(action);
      break;
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
