import { ACTIONS } from './Action';

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.TYPE_QUESTION:
      return {
        ...state,
        typeQuestion: action.payload,
      };
    case ACTIONS.CHOICE_ANS:
      return {
        ...state,
        ansChoice: action.payload,
      };
    case ACTIONS.NEXT_QUESTION:
      return {
        ...state,
        activeQuestion: state.activeQuestion + 1,
        ansChoice: [],
      };
    case ACTIONS.CORRECT:
      return {
        ...state,
        activeQuestion: state.activeQuestion + 1,
        ansChoice: [],
      };
    default:
      return state;
  }
};

export default reducers;
