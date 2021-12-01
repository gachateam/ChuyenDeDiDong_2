import {ACTIONS} from './Action';

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
        activeQuestion: action.payload,
        ansChoice: [],
      };
    case ACTIONS.CORRECT:
      return {
        ...state,
        activeQuestion: state.activeQuestion + 1,
        ansChoice: [],
      };
    case ACTIONS.INCORRECT:
      return {
        ...state,
        questionIncorrect: [...state.questionIncorrect, action.payload],
      };
    case ACTIONS.ANS_QUESTION_INCORRECT:
      return {
        ...state,
        ansQuestionIncorrect: action.payload,
      };
    case ACTIONS.CHECK:
      return {
        ...state,
        check: {
          ...state.check,
          current: state.check.max - state.questionIncorrect.length,
        },
      };
    case ACTIONS.SET_CHECK_DEFAULT:
      return {
        ...state,
        check: {
          ...state.check,
          current: state.check.max,
        },
      };
    default:
      return state;
  }
};

export default reducers;
