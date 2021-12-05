import {ACTIONS} from './Action';

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case ACTIONS.SIGNIN_ANONYMOUS:
      return {
        ...state,
        signinAnonymous: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
