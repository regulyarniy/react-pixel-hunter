import React from "react";
import PropTypes from "prop-types";
import getAnswerResult from "../../utils/getAnswerResult";

const GameStats = ({answers, length}) => {
  const filledAnswers = [...answers];
  filledAnswers.length = length;
  filledAnswers.fill(null, answers.length);
  const results = filledAnswers.map((answer, index) => <li key={index}
    className={`stats__result ${getAnswerResult(answer)}`}/>);
  return (
    <ul className="stats">
      {results}
    </ul>
  );
};

GameStats.propTypes = {
  answers: PropTypes.array,
  length: PropTypes.number
};

export default GameStats;
