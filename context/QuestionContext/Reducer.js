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
      };r
    case ACTIONS.NEXT_QUESTION:
      return {
        ...state,
        activeQuestion: state.activeQuestion+1,
      };
    default:
      return state;
  }
};

export default reducers;
