import React from 'react';
import PropTypes from "prop-types";

const GameOfThree = ({answers, onAnswer}) => {
  const options = answers.map((answer, index) => {
    return (
      <div key={answer.image.url} onClick={() => onAnswer(answer.type)} className="game__option">
        <img src={answer.image.url} alt={`Option ${index}`} width={answer.image.width} height={answer.image.height}/>
      </div>
    );
  });
  return (
    <form className="game__content  game__content--triple">
      {options}
    </form>
  );
};

GameOfThree.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired
};

export default GameOfThree;
