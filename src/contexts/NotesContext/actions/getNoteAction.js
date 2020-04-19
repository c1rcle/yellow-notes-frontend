import yellowNotesApi from '../../../apis/yellowNotesApi';

const getNoteAction = async (action, dispatch) => {
  dispatch({ type: 'LOADING_START' });

  let response;
  try {
    response = await yellowNotesApi().get('notes/' + action.payload.noteId);
  } catch (e) {
    response = e.response;
  }

  return response.status !== 200
    ? { type: 'ERROR', payload: { type: 'GET', msg: 'Unable to load note!' } }
    : {
        ...action,
        payload: {
          ...response.data
        }
      };
};

export default getNoteAction;
