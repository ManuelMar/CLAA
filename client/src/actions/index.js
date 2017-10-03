import axios from 'axios';
import { FETCH_USER } from './types';

//thunk autmatically passes on dispatch
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};
