import yellowNotesApi from '../../../apis/yellowNotesApi';

const addNoteAction = async (action, dispatch) => {
  dispatch({ type: 'LOADING_START' });

  let response;
  try {
    response = await yellowNotesApi().get('notes', { params: { ...action.payload } });
  } catch (e) {
    throw new Error('Get notes action has failed! ', response);
  }

  if (response.status !== 200) throw new Error('Get notes action has failed! ', response);

  return { ...action, payload: response.data };
};

export default addNoteAction;
