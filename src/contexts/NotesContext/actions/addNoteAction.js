import yellowNotesApi from '../../../apis/yellowNotesApi';
import yellowNotesApiHandler from '../../../apis/yellowNotesApiHandler';

const addNoteAction = async (action, dispatch) => {
  const note = action.payload.formData;
  if (!note || !note.title || Object.keys(note).length <= 1)
    throw new Error('Note creation request has invalid parameters!');

  dispatch({ type: 'LOADING_START' });

  const response = await yellowNotesApiHandler(yellowNotesApi().post('notes', note), {
    type: 'ADD',
    msg: 'Error while adding note!'
  });

  const filters = action.payload.filters;

  return response.type === 'ERROR'
    ? response
    : {
        ...action,
        payload:
          filters.includes(response.data.categoryId) || filters.length === 0 ? response.data : null
      };
};

export default addNoteAction;
