import yellowNotesApi from '../../../apis/yellowNotesApi';
import yellowNotesApiHandler from '../../../apis/yellowNotesApiHandler';

const addNoteAction = async (action, dispatch) => {
  if (!action.payload || !action.payload.title || Object.keys(action.payload).length <= 1)
    throw new Error('Note creation request has invalid parameters!');

  const note = { ...action.payload };

  dispatch({ type: 'LOADING_START' });

  const response = await yellowNotesApiHandler(yellowNotesApi().post('notes', note), {
    type: 'ADD',
    msg: 'Error while adding note!'
  });
  return response.type === 'ERROR' ? response : { ...action, payload: response.data };
};

export default addNoteAction;
