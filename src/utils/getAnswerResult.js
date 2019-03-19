import {AnswerConfig, AnswerResult, Timer} from "../constants/constants";

export default (answer) => {
  if (!answer) {
    return AnswerResult.UNKNOWN;
  }
  const {isValid, timeLeft} = answer;
  const answerTime = Timer.START_VALUE - timeLeft;
  if (!isValid) {
    return AnswerResult.WRONG;
  }
  switch (true) {
    case (answerTime <= AnswerConfig.FAST_THRESHOLD):
      return AnswerResult.FAST;
    case (answerTime > AnswerConfig.SLOW_THRESHOLD):
      return AnswerResult.SLOW;
    default:
      return AnswerResult.CORRECT;
  }
};
