import Type from './types';

const requestQuestions = (questions) => ({
  type: Type.REQUEST_QUESTIONS,
  payload: {
    questions
  }
});

const failRequest = (error) => ({
  type: Type.FAIL_REQUEST,
  payload: {
    error
  }
});

export default {
  requestQuestions,
  failRequest
};
