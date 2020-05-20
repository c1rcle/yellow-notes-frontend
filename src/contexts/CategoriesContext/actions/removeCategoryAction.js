import yellowNotesApi from '../../../apis/yellowNotesApi';
import yellowNotesApiHandler from '../../../apis/yellowNotesApiHandler';

const removeCategoryAction = async (action, dispatch) => {
  if (!action.payload || !action.payload.categoryId)
    throw new Error('Category deletion request has invalid parameters!');

  dispatch({ type: 'LOADING_START' });

  const response = await yellowNotesApiHandler(
    yellowNotesApi().delete('categories/' + action.payload.categoryId),
    { type: 'REMOVE', msg: 'Error while removing category!' }
  );
  return response.type === 'ERROR' ? response : { ...action };
};

export default removeCategoryAction;
