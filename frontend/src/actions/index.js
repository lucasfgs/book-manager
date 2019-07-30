import * as types from "../constants/ActionTypes";

export const addUser = (userId, nome, email) => ({
  type: types.ADD_USER,
  userId,
  nome,
  email
});
export const removeUser = () => ({
  type: types.REMOVE_USER
});
