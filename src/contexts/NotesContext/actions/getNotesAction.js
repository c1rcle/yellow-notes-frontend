import yellowNotesApi from '../../../apis/yellowNotesApi';

const getNoteAction = async (state, action, dispatch) => {
  dispatch({ type: 'LOADING_START' });

  let response;
  try {
    response = await yellowNotesApi().get('notes', {
      params: { ...action.payload, skipCount: state.loadedCount }
    });
  } catch (e) {
    throw new Error('Get notes action has failed! ', response);
  }

  if (response.status !== 200) throw new Error('Get notes action has failed! ', response);

  let loadedCount = state.loadedCount + action.payload.takeCount;
  // let loadedCount = action.payload.skipCount + action.payload.takeCount;
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
