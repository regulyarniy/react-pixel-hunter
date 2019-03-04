import React, {Component, Fragment} from "react";
import Header from "../Header/Header";
import GameStats from "./GameStats";
import PropTypes from "prop-types";
import GameOfThree from "./GameOfThree";
import GameOfTwo from "./GameOfTwo";
import GameTinder from "./GameTinder";
import {API, Timer} from "../../constants/constants";

const {GameTypes} = API;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      timeLeft: Timer.START_VALUE.toString(),
    };

    this.questions = this.props.questions;
    this.timer = Timer.START_VALUE;
    this.ticker = null;
    this.handleSingleAnswer = this.handleSingleAnswer.bind(this);
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
    this.resetTimer();
  }

  componentWillUnmount() {
    clearTimeout(this.ticker);
  }


  render() {
    const gameProps = {
      handleSwitchToNextQuestion: () => this.switchToNextQuestion(),
      answers: this.currentQuestionAnswers,
    };

    return (
      <Fragment>
        <Header
          isGameScreen={true}
          timeLeft={this.state.timeLeft}
        />
        <main id="main" className="central">
          <section className="game">
            <p className="game__task">{this.currentQuestionText}</p>
            {{
              [GameTypes.OF_THREE]: <GameOfThree {...gameProps}/>,
              [GameTypes.OF_TWO]: <GameOfTwo {...gameProps}/>,
              [GameTypes.TINDER]: <GameTinder {...gameProps} onAnswer={this.handleSingleAnswer}/>,
            }[this.currentQuestionType]}
            <GameStats/>
          </section>
        </main>
      </Fragment>
    );
  }

  switchToNextQuestion() {
    if (this.state.currentQuestion < this.questions.length - 1) {
      this.setState({currentQuestion: this.state.currentQuestion + 1});
      this.resetTimer();
    } else {
      this.props.history.push(`/stats`);
    }
  }

  tick() {
    this.timer = this.timer - Timer.DECREMENT;
    this.ticker = setTimeout(() => {
      this.setState({
        timeLeft: this.timer < Timer.STRING_SHIFT
          ? `0${this.timer}`
          : `${this.timer}`,
      });
      if (this.timer === Timer.STOP_VALUE) {
        this.props.onAddAnswer({isValid: false, timeLeft: Timer.STOP_VALUE});
        this.switchToNextQuestion();
        return;
      }
      this.tick();
    }, Timer.INTERVAL);
  }

  resetTimer() {
    clearTimeout(this.ticker);
    this.setState({timeLeft: Timer.START_VALUE.toString()});
    this.timer = Timer.START_VALUE;
    this.tick();
  }

  handleSingleAnswer(typeOfImage) {
    if (typeOfImage === this.currentQuestionAnswers[0].type) {
      this.props.onAddAnswer({isValid: true, timeLeft: this.timer});
    } else {
      this.props.onAddAnswer({isValid: false, timeLeft: this.timer});
    }
    this.switchToNextQuestion();
  }
}

Game.propTypes = {
  questions: PropTypes.array.isRequired,
  onAddAnswer: PropTypes.func,
};

export default Game;
