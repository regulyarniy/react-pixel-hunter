import Types from './types';

const INITIAL_STATE = {
  questions: [],
  error: null,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case Types.REQUEST_QUESTIONS:
      return {
        ...state,
        questions: action.payload.questions,
      };

    case Types.FAIL_REQUEST:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default appReducer;
