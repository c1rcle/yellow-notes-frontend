import yellowNotesApi from '../../../apis/yellowNotesApi';
import yellowNotesApiHandler from '../../../apis/yellowNotesApiHandler';

const getNoteAction = async (action, dispatch) => {
  dispatch({ type: 'LOADING_START' });

  const params = new URLSearchParams();
  action.payload.skipCount && params.append('skipCount', action.payload.skipCount);
  action.payload.takeCount && params.append('takeCount', action.payload.takeCount);
  action.payload.categories &&
    action.payload.categories.forEach(c => params.append('categoryIds', c));

  const response = await yellowNotesApiHandler(yellowNotesApi().get('notes', { params }), {
    type: 'GET',
    msg: 'Unable to load notes!'
  });
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
