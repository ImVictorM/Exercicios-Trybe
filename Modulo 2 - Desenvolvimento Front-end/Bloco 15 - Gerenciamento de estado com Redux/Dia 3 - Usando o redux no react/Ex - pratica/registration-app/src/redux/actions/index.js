import { SAVE_USER_DATA, LOGIN } from "./actionTypes";

const saveUser = (payload) => ({
  type: SAVE_USER_DATA,
  payload,
});

const logIn = () => ({
  type: LOGIN,
});

export {
  saveUser,
  logIn,
};
