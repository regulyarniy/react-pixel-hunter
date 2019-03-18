import Type from './types';

const INITIAL_STATE = {
  questions: [],
  error: null,
  name: ``,
  answers: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case Type.QUESTIONS_REQUEST:
      return {
        ...state,
        questions: action.payload.questions,
      };

    case Type.ERROR_SET:
      return {
        ...state,
        error: action.payload.error,
      };

    case Type.NAME_SET:
      return {
        ...state,
        name: action.payload.name,
      };

    case Type.ANSWER_ADD: {
      const newAnswers = state.answers.slice();
      const {isValid, timeLeft} = action.payload;
      newAnswers.push({isValid, timeLeft});
      return {
        ...state,
        answers: newAnswers
      };
    }

    default:
      return state;
  }
};

export default appReducer;
