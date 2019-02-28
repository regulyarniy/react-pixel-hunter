import Types from './types';

const INITIAL_STATE = {
  questions: [],
  error: null,
  name: ``,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case Types.REQUEST_QUESTIONS:
      return {
        ...state,
        questions: action.payload.questions,
      };

    case Types.ERROR_SET:
      return {
        ...state,
        error: action.payload.error,
      };

    case Types.NAME_SET:
      return {
        ...state,
        name: action.payload.name,
      };

    default:
      return state;
  }
};

export default appReducer;
