import yellowNotesApi from '../../../apis/yellowNotesApi';
import yellowNotesApiHandler from '../../../apis/yellowNotesApiHandler';

const getNoteAction = async (action, dispatch) => {
  dispatch({ type: 'LOADING_START' });

  const response = await yellowNotesApiHandler(
    yellowNotesApi().get('notes/' + action.payload.noteId),
    { type: 'GET', msg: 'Unable to load note!' }
  );
  return response.type === 'ERROR'
    ? response
    : {
        ...action,
        payload: {
          ...response.data
        }
      };
};

export default getNoteAction;
