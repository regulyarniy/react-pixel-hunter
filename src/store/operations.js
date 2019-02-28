import actions from './actions';
import axios from "axios";
import {API} from "../constants/constants";

const getQuestions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API.URL_BASE}/${API.ENDPOINT_QUESTIONS}`);
      dispatch(actions.requestQuestions(response.data));
    } catch (error) {
      dispatch(actions.setError(error));
    }
  };
};

const resetError = () => {
  return (dispatch) => {
    dispatch(actions.setError(null));
  };
};

const setName = (name) => {
  return (dispatch) => {
    dispatch(actions.setName(name));
  };
};

export default {
  getQuestions,
  resetError,
  setName
};
