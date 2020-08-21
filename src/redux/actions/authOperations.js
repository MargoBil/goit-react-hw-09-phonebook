import * as actions from './index';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

//auth operations
const logUp = credentials => async dispatch => {
  try {
    dispatch(actions.logupRequest());
    const {data} = await axios.post('/users/signup', credentials);
    token.set(data.token);
    dispatch(actions.logupSuccess(data));
  } catch (error) {
    dispatch(actions.logupFailure(error));
  }
};
const logIn = credentials => async dispatch => {
  try {
    dispatch(actions.loginRequest());
    const {data} = await axios.post('/users/login', credentials);
    token.set(data.token);
    dispatch(actions.loginSuccess(data));
  } catch (error) {
    dispatch(actions.loginFailure(error));
  }
};
const logOut = () => async dispatch => {
  try {
    dispatch(actions.logoutRequest());
    await axios.post('/users/logout');
    token.unset();

    dispatch(actions.logoutSuccess());
  } catch (error) {
    dispatch(actions.logoutFailure(error));
  }
};
const getCurrentUser = () => async (dispatch, getState) => {
  try {
    const {
      auth: {token: persistedToken},
    } = getState();
    if (!persistedToken) {
      return;
    }
    token.set(persistedToken);
    dispatch(actions.getCurrentUserRequest());
    const {data} = await axios.get('/users/current');
    dispatch(actions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(actions.getCurrentUserFailure(error));
  }
};
export default {
  logUp,
  logIn,
  logOut,
  getCurrentUser,
};
