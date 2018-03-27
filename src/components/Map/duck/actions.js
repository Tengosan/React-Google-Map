import Types from './types';

const addFlag = () => ({
  type: Types.ADD_FLAG,
  data:{}
});

const deleteFlag = () => ({
  type: Types.DELETE_FLAG,
  data:{}
});

const addPoint = () => ({
  type: Types.ADD_POINT,
  data:{}
});

const deletePoint = () => ({
  type: Types.DELETE_POINT,
  data:{}
});


export default { addFlag, deleteFlag, addPoint, deletePoint };