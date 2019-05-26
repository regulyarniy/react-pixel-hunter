import Type from "./types";

const requestQuestions = (questions) => ({
  type: Type.QUESTIONS_REQUEST,
  payload: {
    questions,
  },
});

const setName = (name) => ({
  type: Type.NAME_SET,
  payload: {
    name,
  },
});

const setError = (error) => ({
  type: Type.ERROR_SET,
  payload: {
    error,
  },
});

const addAnswer = ({ isValid, timeLeft }) => ({
  type: Type.ANSWER_ADD,
  payload: {
    isValid,
    timeLeft,
  },
});

export default {
  requestQuestions,
  setError,
  setName,
  addAnswer,
};
