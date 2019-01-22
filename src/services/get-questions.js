import axios from "axios";

const URL_BASE = `https://es.dump.academy/pixel-hunter/`;
const ENDPOINT_QUESTIONS = `${URL_BASE}questions`;

const getQuestions = async (callback) => {
  try {
    const response = await axios.get(ENDPOINT_QUESTIONS);
    callback(response.data);
  } catch (error) {
    callback(-1, error);
  }
};

export default getQuestions;
