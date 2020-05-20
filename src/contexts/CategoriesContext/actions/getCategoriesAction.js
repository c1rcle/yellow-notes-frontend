import yellowNotesApi from '../../../apis/yellowNotesApi';
import yellowNotesApiHandler from '../../../apis/yellowNotesApiHandler';

const getCategoriesAction = async (action, dispatch) => {
  dispatch({ type: 'LOADING_START' });

  const response = await yellowNotesApiHandler(yellowNotesApi().get('categories'), {
    type: 'GET',
    msg: 'Unable to load categories!'
  });

  if (response.type === 'ERROR') return response;
  return {
    ...action,
    payload: [...response.data]
  };
};

export default getCategoriesAction;
