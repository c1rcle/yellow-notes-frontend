import yellowNotesApi from '../../../apis/yellowNotesApi';
import yellowNotesApiHandler from '../../../apis/yellowNotesApiHandler';

const addCategoryAction = async (action, dispatch) => {
  if (!action.payload || !action.payload.name)
    throw new Error('Category creation request has invalid parameters!');

  const category = { ...action.payload };

  dispatch({ type: 'LOADING_START' });

  const response = await yellowNotesApiHandler(yellowNotesApi().post('categories', category), {
    type: 'ADD',
    msg: 'Error while adding Category!'
  });
  return response.type === 'ERROR' ? response : { ...action, payload: response.data };
};

export default addCategoryAction;
