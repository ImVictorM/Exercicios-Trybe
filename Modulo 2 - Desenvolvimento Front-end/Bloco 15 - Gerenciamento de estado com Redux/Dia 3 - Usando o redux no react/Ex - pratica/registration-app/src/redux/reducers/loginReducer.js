import { SAVE_USER_DATA, LOGIN } from "../actions/actionTypes";

const INITIAL_STATE = {
  users: [],
  login: false,
}

function loginReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        users: [...state.users, {...action.payload} ],
        login: state.login,
      }
    case LOGIN: 
      return {
        ...state,
        login: true,
      }
    default:
      return state;
  }
}

export default loginReducer;