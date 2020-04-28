import yellowNotesApi from '../../../apis/yellowNotesApi';
import yellowNotesApiHandler from '../../../apis/yellowNotesApiHandler';

const getNoteAction = async (action, dispatch) => {
  dispatch({ type: 'LOADING_START' });

  const response = await yellowNotesApiHandler(
    yellowNotesApi().get('notes', { params: { ...action.payload } }),
    { type: 'GET', msg: 'Unable to load notes!' }
  );
  if (response.type === 'ERROR') return response;

  const loadedCount = action.payload.skipCount + action.payload.takeCount;
  const serverCount = response.data.count;

  return {
    ...action,
    payload: {
      loadedCount: loadedCount < serverCount ? loadedCount : serverCount,
      serverCount,
      notes: response.data.notes
    }
  };
};

export default getNoteAction;
