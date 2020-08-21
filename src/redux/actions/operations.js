import * as actions from './index';
import axios from 'axios';

//contacts operations
const addName = ({name, number}) => async dispatch => {
  try {
    dispatch(actions.addNameRequest());
    const {data} = await axios.post('/contacts', {name, number});
    dispatch(actions.addNameSuccess(data));
  } catch (error) {
    dispatch(actions.addNameFailure(error));
  }
};

const fetchNames = () => async dispatch => {
  try {
    dispatch(actions.fetchNamesRequest());
    const {data} = await axios.get('/contacts');
    dispatch(actions.fetchNamesSuccess(data));
  } catch (error) {
    dispatch(actions.fetchNamesFailure(error));
  }
};

const deleteName = id => async dispatch => {
  try {
    dispatch(actions.deleteNameRequest());
    await axios.delete(`/contacts/${id}`);
    dispatch(actions.deleteNameSuccess(id));
  } catch (error) {
    dispatch(actions.deleteNameFailure(error));
  }
};

export default {
  addName,
  fetchNames,
  deleteName,
};
