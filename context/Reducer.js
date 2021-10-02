import { ACTIONS } from "./Action";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.TRONGCAY:
      return {
        ...state,
        ruong: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;