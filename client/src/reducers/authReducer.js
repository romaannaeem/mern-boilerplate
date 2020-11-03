import { FETCH_USER, LOGOUT_USER, LOGIN_USER } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case LOGIN_USER:
      console.log('log in action', action);
      return action.payload;
    case LOGOUT_USER:
      return action.payload;
    default:
      return state;
  }
}
