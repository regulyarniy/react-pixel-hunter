import React, {Component, Fragment} from "react";
import Header from "../Header/Header";
import GameStats from "./GameStats";
import PropTypes from "prop-types";
import GameOfThree from "./GameOfThree";
import GameOfTwo from "./GameOfTwo";
import GameTinder from "./GameTinder";
import {API, Timer} from "../../constants/constants";
const {GameTypes} = API;
import Context from "../../context";

class Game extends Component {
  constructor(props) {
    super(props);
    this.questions = this.props.questions;
    this.state = {
      currentQuestion: 0,
      timeLeft: Timer.START_VALUE.toString(),
    };

    this._timer = Timer.START_VALUE;
    this._ticker = null;
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

  componentDidMount() {
    this._resetTimer();
  }

  componentWillUnmount() {
    clearTimeout(this._ticker);
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
          timeLeft={this.state.timeLeft}
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
      this._resetTimer();
    } else {
      this.props.history.push(`/stats`);
    }
  }

  _tick() {
    this._timer = this._timer - Timer.DECREMENT;
    this._ticker = setTimeout(() => {
      this.setState({
        timeLeft: this._timer < Timer.STRING_SHIFT
          ? `0${this._timer}`
          : `${this._timer}`,
      });
      if (this._timer === Timer.STOP_VALUE) {
        return;
      }
      this._tick();
    }, Timer.INTERVAL);
  }

  _resetTimer() {
    clearTimeout(this._ticker);
    this.setState({timeLeft: Timer.START_VALUE.toString()});
    this._timer = Timer.START_VALUE;
    this._tick();
  }
}

Game.contextType = Context;

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
