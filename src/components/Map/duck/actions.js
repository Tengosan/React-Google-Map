import Types from './types';

const addFlag = () => ({
  type: Types.ADD_FLAG
});

const deleteFlag = () => ({
  type: Types.DELETE_FLAG
});

const addPoint = () => ({
  type: Types.ADD_POINT
});

const deletePoint = () => ({
  type: Types.DELETE_POINT
});


export default { addFlag, deleteFlag, addPoint, deletePoint };