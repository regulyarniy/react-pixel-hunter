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

GameOfThree.defaultProps = {
  handleSwitchToNextQuestion: ()=>{},
  answers: [
    {
      image: {
        url: `http://i.imgur.com/rY9u55S.jpg`,
        width: 304,
        height: 455
      },
      type: `photo`
    },
    {
      image: {
        url: `http://i.imgur.com/ncXRs5Y.jpg`,
        width: 304,
        height: 455
      },
      type: `photo`
    },
    {
      image: {
        url: `https://k39.kn3.net/E07A38605.jpg`,
        width: 304,
        height: 455
      },
      type: `painting`
    }
  ]
};

export default GameOfThree;
