import React, {Component, Fragment} from "react";
import Header from "../header/header";
import GameStats from "./game-stats";
import PropTypes from "prop-types";
import GameOfThree from "./game-of-three";
import GameOfTwo from "./game-of-two";
import GameTinder from "./game-tinder";
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
          handleSwitchToWelcomeScreen={this.props.handleSwitchToWelcomeScreen}
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
      this.props.handleSwitchToWelcomeScreen();
    }
  }
}

Game.propTypes = {
  questions: PropTypes.array.isRequired,
  handleSwitchToNextScreen: PropTypes.func.isRequired,
  handleSwitchToWelcomeScreen: PropTypes.func.isRequired
};

export default Game;
