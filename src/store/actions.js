import Type from './types';

const requestQuestions = (questions) => ({
  type: Type.REQUEST_QUESTIONS,
  payload: {
    questions,
  },
});

const setName = (name) => ({
  type: Type.NAME_SET,
  payload: {
    name
  }
});

const setError = (error) => ({
  type: Type.ERROR_SET,
  payload: {
    error,
  },
});

export default {
  requestQuestions,
  setError,
  setName
};
