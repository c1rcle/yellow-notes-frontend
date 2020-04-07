import yellowNotesApi from '../../../apis/yellowNotesApi';

const getNoteAction = async (action, dispatch) => {
  dispatch({ type: 'LOADING_START' });

  let response;
  try {
    response = await yellowNotesApi().get('notes', { params: { ...action.payload } });
  } catch (e) {
    throw new Error('Get notes action has failed! ', response);
  }

  if (response.status !== 200) throw new Error('Get notes action has failed! ', response);

  let loadedCount = action.payload.skipCount + action.payload.takeCount;
  const serverCount = response.data.count;

  if (serverCount !== 0) {
    console.log('constrain to server count', serverCount);
    loadedCount = loadedCount < serverCount ? loadedCount : serverCount;
  }

  console.log('loaded count', loadedCount);

  return {
    ...action,
    payload: {
      loadedCount,
      serverCount,
      notes: response.data.notes
    }
  };
};

export default getNoteAction;
