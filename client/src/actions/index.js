import axios from 'axios';
import { FETCH_USER, FETCH_EVENTS } from './types';

//thunk autmatically passes on dispatch
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitEvent = (values, history) => async dispatch => {
  const res = await axios.post('/api/events', values);
  history.push('/events');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchEvents = () => async dispatch => {
  const res = await axios.get('api/events');

  dispatch({ type: FETCH_EVENTS, payload: res.data });
};
