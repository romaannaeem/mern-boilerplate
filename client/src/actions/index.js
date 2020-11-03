import axios from 'axios';
import { FETCH_USER, LOGOUT_USER, LOGIN_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/auth/user');
  console.log('fetch user', res);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const loginUser = () => async (dispatch) => {
  const res = await axios.post('/auth/login');
  dispatch({ type: LOGIN_USER, payload: res.data });
};

export const logoutUser = () => async (dispatch) => {
  const res = await axios.get('/auth/logout');
  console.log('logout dispatched', res.data);
  dispatch({ type: LOGOUT_USER, payload: res.data });
};
