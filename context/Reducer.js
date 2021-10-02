import { ACTIONS } from "./Action";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHOOSE_TITLES:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;