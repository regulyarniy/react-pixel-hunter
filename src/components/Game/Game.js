import React, {Component, Fragment} from "react";
import Header from "../Header/Header";
import GameStats from "./GameStats";
import PropTypes from "prop-types";
import GameOfThree from "./GameOfThree";
import GameOfTwo from "./GameOfTwo";
import GameTinder from "./GameTinder";
import {API} from "../../constants/constants";
const {GameTypes} = API;

class Game extends Component {
  constructor(props) {
    super(props);
    this.questions = this.props.questions;
    this.state = {
      currentQuestion: 0
    };
  }

  get currentQuestionType() {
    return this.questions[this.state.currentQuestion].type;
  }

  get currentQuestionText() {
    return this.questions[this.state.currentQuestion].question;
  }

  get currentQuestionAnswers() {
    return this.questions[this.state.currentQuestion].answers;
  }

  render() {
    const gameProps = {
      handleSwitchToNextQuestion: () => this.switchToNextQuestion(),
      answers: this.currentQuestionAnswers
    };
    return (
      <Fragment>
        <Header
          isGameScreen={true}
        />
        <section className="game">
          <p className="game__task">{this.currentQuestionText}</p>
          {{
            [GameTypes.OF_THREE]: <GameOfThree {...gameProps}/>,
            [GameTypes.OF_TWO]: <GameOfTwo {...gameProps}/>,
            [GameTypes.TINDER]: <GameTinder {...gameProps}/>
          }[this.currentQuestionType]}
          <GameStats/>
        </section>
      </Fragment>
    );
  }

  switchToNextQuestion() {
    if (this.state.currentQuestion < this.questions.length - 1) {
      this.setState({currentQuestion: this.state.currentQuestion + 1});
    } else {
      this.props.history.push(`/stats`);
    }
  }
}

Game.propTypes = {
  questions: PropTypes.array.isRequired
};

Game.defaultProps = {
  questions: [
    {
      type: `two-of-two`,
      question: `Угадайте для каждого изображения фото или рисунок?`,
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
    },
    {
      type: `one-of-three`,
      question: `Найдите рисунок среди изображений`,
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
    },
    {
      type: `tinder-like`,
      question: `Угадай, фото или рисунок?`,
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
    }
  ],
  handleSwitchToNextScreen: ()=>{}
};

export default Game;
