import React from 'react';
import PropTypes from "prop-types";

const GameOfTwo = (props) => {
  const options = props.answers.map((answer, index) => {
    return (
      <div key={answer.image.url} className="game__option">
        <img src={answer.image.url} alt={`Option ${index}`} width={answer.image.width} height={answer.image.height}/>
        <label className="game__answer  game__answer--photo" >
          <input onClick={props.handleSwitchToNextQuestion} className="visually-hidden" name={`question${index}`} type="radio" value="photo"/>
          <span>Фото</span>
        </label>
        <label className="game__answer  game__answer--paint">
          <input onClick={props.handleSwitchToNextQuestion} className="visually-hidden" name={`question${index}`} type="radio" value="paint"/>
          <span>Рисунок</span>
        </label>
      </div>
    );
  });
  return (
    <form className="game__content">
      {options}
    </form>
  );
};

GameOfTwo.propTypes = {
  handleSwitchToNextQuestion: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired
};

GameOfTwo.defaultProps = {
  handleSwitchToNextQuestion: ()=>{},
  answers: [
    {
      image: {
        url: `http://i.imgur.com/UIHVp0P.jpg`,
        width: 468,
        height: 458
      },
      type: `photo`
    },
    {
      image: {
        url: `http://i.imgur.com/eSlWjE7.jpg`,
        width: 468,
        height: 458
      },
      type: `photo`
    }
  ]
};

export default GameOfTwo;
