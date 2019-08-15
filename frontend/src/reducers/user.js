import { ADD_USER, REMOVE_USER } from "../constants/ActionTypes";

const INITIAL_STATE = {
  userId: null,
  nome: "",
  email: "",
  logged: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        userId: action.userId,
        nome: action.nome,
        email: action.email,
        logged: "true"
      };
    case REMOVE_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
