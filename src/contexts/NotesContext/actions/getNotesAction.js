import yellowNotesApi from '../../../apis/yellowNotesApi';

const getNoteAction = async (action, dispatch) => {
  dispatch({ type: 'LOADING_START' });

  let response;
  try {
    response = await yellowNotesApi().get('notes', { params: { ...action.payload } });
  } catch (e) {
    response = e.response;
  }

  if (response.status !== 200) {
    return { type: 'ERROR', payload: { type: 'GET', msg: 'Unable to load notes!' } };
  }

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
