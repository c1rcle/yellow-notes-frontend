const actionRegister = async action => {
  // await ...
  delete action.payload.password;
  action.payload.notes = [];
  return action;
};

const actionLogin = async action => {
  // await ...
  delete action.payload.password;
  action.payload.notes = [
    {
      id: 0,
      content: 'Some example text'
    },
    {
      id: 1,
      content: 'Some example text'
    },
    {
      id: 2,
      content: 'Some example text'
    },
    {
      id: 3,
      content: 'Some example text'
    },
    {
      id: 4,
      content: 'Multi \nline \ntext'
    }
  ];
  return action;
};

const actionAddNote = async action => {
  // await ...
  return action;
};

const dispatchAsync = dispatch => action => {
  switch (action.type) {
    case 'REGISTER':
      actionRegister(action).then(a => dispatch(a));
      break;
    case 'LOGIN':
      actionLogin(action).then(a => dispatch(a));
      break;
    case 'ADD_NOTE':
      actionAddNote(action).then(a => dispatch(a));
      break;
    default:
      dispatch(action);
  }
};

export default dispatchAsync;
