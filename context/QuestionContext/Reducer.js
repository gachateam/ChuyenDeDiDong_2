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
        default:
            return state;
    }
};

export default reducers;
