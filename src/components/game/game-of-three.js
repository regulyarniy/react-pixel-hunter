import React from 'react';
import PropTypes from "prop-types";

const GameOfThree = (props) => {
  const options = props.answers.map((answer, index) => {
    return (
      <div key={answer.image.url} onClick={props.handleSwitchToNextQuestion} className="game__option">
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
  handleSwitchToNextQuestion: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired
};

export default GameOfThree;
