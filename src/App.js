import React, {Component, Fragment} from 'react';
import Intro from './components/intro/intro';
import Welcome from './components/welcome/welcome';
import Rules from './components/rules/rules';
import Game from "./components/game/game";
import Stats from "./components/stats/stats";
import Footer from "./components/footer/footer";
import getQuestions from "./services/get-questions";

class App extends Component {
  constructor(props) {
    super(props);
    this.screens = [Intro, Welcome, Rules, Game, Stats];
    this.state = {
      currentScreen: 0,
      questions: null,
      errorText: null
    };
    getQuestions((result, error) => {
      if (result === -1) {
        this.setState({errorText: error});
      } else {
        this.setState({questions: result});
      }
    }).then();
  }

  render() {
    return (
      <Fragment>
        <main id="main" className="central">
          {this.renderScreen()}
        </main>
        <Footer/>
      </Fragment>
    );
  }

  renderScreen() {
    const {questions, errorText} = this.state;
    switch (this.state.currentScreen) {
      case 0:
        return <Intro
          handleSwitchToNextScreen={() => this.switchToNextScreen()}
          handleSwitchToWelcomeScreen={() => this.switchToWelcomeScreen()}
          questions={questions}
          errorText={errorText}
        />;
      case 1:
        return <Welcome
          handleSwitchToNextScreen={() => this.switchToNextScreen()}
          handleSwitchToWelcomeScreen={() => this.switchToWelcomeScreen()}
        />;
      case 2:
        return <Rules
          handleSwitchToNextScreen={() => this.switchToNextScreen()}
          handleSwitchToWelcomeScreen={() => this.switchToWelcomeScreen()}
        />;
      case 3:
        return <Game
          handleSwitchToNextScreen={() => this.switchToNextScreen()}
          handleSwitchToWelcomeScreen={() => this.switchToWelcomeScreen()}
          questions={this.state.questions}
        />;
      case 4:
        return <Stats handleSwitchToWelcomeScreen={() => this.switchToWelcomeScreen()}/>;
      default:
        return null;
    }
  }

  switchToNextScreen() {
    const nextScreenNumber = this.state.currentScreen + 1;
    this.setState({
      currentScreen: nextScreenNumber < this.screens.length ? nextScreenNumber : 0
    });
  }

  switchToWelcomeScreen() {
    this.setState({
      currentScreen: 1
    });
  }
}

export default App;
