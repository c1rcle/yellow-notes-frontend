const actionRegister = async action => {
  // await ...
  return action;
};

const actionLogin = async action => {
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
    default:
      dispatch(action);
  }
};

export default dispatchAsync;
