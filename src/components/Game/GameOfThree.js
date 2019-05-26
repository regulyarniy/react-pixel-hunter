import React from "react";
import PropTypes from "prop-types";

const GameOfThree = ({ answers, onAnswer }) => {
  const options = answers.map((answer, index) => {
    const handleAnswer = (event) => {
      event.preventDefault();
      event.target.blur();
      onAnswer(answer.type);
    };

    return (
      <div
        key={answer.image.url}
        onClick={handleAnswer}
        className="game__option"
      >
        <img src={answer.image.url} alt={`Option ${index}`} />
      </div>
    );
  });
  return (
    <form className="game__content  game__content--triple">{options}</form>
  );
};

GameOfThree.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired,
};

export default GameOfThree;
