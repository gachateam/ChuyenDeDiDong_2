import { ACTIONS } from "./Action";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHOOSE_TITLES:
      return {
        ...state,
        title: action.payload,
      };
    case ACTIONS.TYPE_QUESTION:
      return {
        ...state,
        typeQuestion: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;