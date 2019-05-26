import React from "react";
import PropTypes from "prop-types";
import { Answer } from "../../constants/constants";

const GameTinder = ({ answers, onAnswer }) => {
  const handleAnswer = (answerType) => (event) => {
    event.preventDefault();
    onAnswer(answerType);
    event.target.blur();
  };
  return (
    <form className="game__content  game__content--wide">
      <div className="game__option">
        <img src={answers[0].image.url} alt="Option 1" />
        <label className="game__answer  game__answer--photo">
          <input
            onClick={handleAnswer(Answer.PHOTO)}
            className="visually-hidden"
            name="question1"
            type="radio"
            value="photo"
          />
          <span>Фото</span>
        </label>
        <label className="game__answer  game__answer--paint">
          <input
            onClick={handleAnswer(Answer.PAINT)}
            className="visually-hidden"
            name="question1"
            type="radio"
            value="paint"
          />
          <span>Рисунок</span>
        </label>
      </div>
    </form>
  );
};

GameTinder.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired,
};

export default GameTinder;
