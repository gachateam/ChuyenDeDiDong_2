import {ACTIONS} from './Action';

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHOOSE_TITLES:
      return {
        ...state,
        title: action.payload,
      };
    case ACTIONS.HIDE_TAB_BAR:
      return {
        ...state,
        hideTabBar: action.payload,
      };
    case ACTIONS.CHOOSE_UNIT:
      return {
        ...state,
        unit: action.payload,
      };
    case ACTIONS.GET_LIST_QUESTION:
      return {
        ...state,
        listQuestion: action.payload,
      };
    case ACTIONS.GET_VOCABULARY:
      return {
        ...state,
        vocabulary: action.payload,
      };
    case ACTIONS.STAGE:
      return {
        ...state,
        stage: action.payload,
      };
    case ACTIONS.SET_REVIEW:
      return {
        ...state,
        review: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
