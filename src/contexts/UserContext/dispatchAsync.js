//import yellowNotesApi from '../../apis/yellowNotesApi';
import registerAction from './actions/registerAction';
import loginAction from './actions/loginAction';
import addNoteAction from './actions/addNoteAction';
import checkTokenAction from './actions/checkTokenAction';

const dispatchAsync = dispatch => action => {
  switch (action.type) {
    case 'CHECK_TOKEN':
      dispatch({ type: 'LOADING_START' });
      checkTokenAction(action)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    case 'REGISTER':
      dispatch({ type: 'LOADING_START' });
      registerAction(action)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    case 'LOGIN':
      dispatch({ type: 'LOADING_START' });
      loginAction(action)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    case 'LOGOUT':
      localStorage.removeItem('token');
      dispatch(action);
      break;
    case 'ADD_NOTE':
      addNoteAction(action)
        .then(a => dispatch(a))
        .catch(err => console.log(err));
      break;
    default:
      dispatch(action);
  }
};

export default dispatchAsync;
