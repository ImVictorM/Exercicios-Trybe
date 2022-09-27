import { SAVE_LOGIN_DATA } from "../actions/actionTypes";

const INITIAL_STATE = {
  users: {},
}

function loginReducer (state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case SAVE_LOGIN_DATA:
      return {
        users: {
          ...state.users,
          ...action.payload
        }
      }
    default:
      return state;
  }
}

export default loginReducer;