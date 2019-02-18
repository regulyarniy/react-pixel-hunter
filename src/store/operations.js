import actions from './actions';
import axios from "axios";
import {API} from "../constants/constants";

const getQuestions = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API.URL_BASE}/${API.ENDPOINT_QUESTIONS}`);
      dispatch(actions.requestQuestions(response.data));
    } catch (error) {
      dispatch(actions.failRequest(error));
    }
  };
};

const resetError = () => {
  return (dispatch) => {
    dispatch(actions.failRequest(null));
  };
};

export default {
  getQuestions,
  resetError
};
