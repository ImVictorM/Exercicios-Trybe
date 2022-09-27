import { SAVE_LOGIN_DATA } from "./actionTypes";

const loginAction = (payload) => ({
  type: SAVE_LOGIN_DATA,
  payload,
});

export default loginAction;
