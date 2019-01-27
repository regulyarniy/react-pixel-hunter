import React from 'react';
import PropTypes from "prop-types";

const GameTinder = (props) => {
  return (
    <form className="game__content  game__content--wide">
      <div className="game__option">
        <img src={props.answers[0].image.url} alt="Option 1" width={props.answers[0].image.width} height={props.answers[0].image.height}/>
        <label className="game__answer  game__answer--photo">
          <input onClick={props.handleSwitchToNextQuestion} className="visually-hidden" name="question1" type="radio" value="photo"/>
          <span>Фото</span>
        </label>
        <label className="game__answer  game__answer--paint">
          <input onClick={props.handleSwitchToNextQuestion} className="visually-hidden" name="question1" type="radio" value="paint"/>
          <span>Рисунок</span>
        </label>
      </div>
    </form>
  );
};

GameTinder.propTypes = {
  handleSwitchToNextQuestion: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired
};

GameTinder.defaultProps = {
  handleSwitchToNextQuestion: ()=>{},
  answers: [
    {
      image: {
        url: `http://i.imgur.com/dWTKNtv.jpg`,
        width: 705,
        height: 455
      },
      type: `photo`
    }
  ]
};

export default GameTinder;
