import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Answer } from "../../constants/constants";

class GameOfTwo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      options: [null, null],
    };

    this.handleChooseAnswer = this.handleChooseAnswer.bind(this);
  }

  get optionsRender() {
    return this.props.answers.map((answer, index) => {
      return (
        <div key={answer.image.url} className="game__option">
          <img src={answer.image.url} alt={`Option ${index}`} />
          <label className="game__answer  game__answer--photo">
            <input
              onClick={() => this.handleChooseAnswer(Answer.PHOTO, index)}
              className="visually-hidden"
              name={`question${index}`}
              type="radio"
              value="photo"
            />
            <span>Фото</span>
          </label>
          <label className="game__answer  game__answer--paint">
            <input
              onClick={() => this.handleChooseAnswer(Answer.PAINT, index)}
              className="visually-hidden"
              name={`question${index}`}
              type="radio"
              value="paint"
            />
            <span>Рисунок</span>
          </label>
        </div>
      );
    });
  }

  render() {
    return <form className="game__content">{this.optionsRender}</form>;
  }

  handleChooseAnswer(typeOfImage, index) {
    const newOptions = this.state.options.slice();
    newOptions[index] = typeOfImage;
    if (newOptions[0] && newOptions[1]) {
      this.props.onAnswer(newOptions);
    } else {
      this.setState({ options: newOptions });
    }
  }
}

GameOfTwo.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired,
};

export default GameOfTwo;
