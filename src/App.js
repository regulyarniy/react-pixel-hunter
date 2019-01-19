import React, {Component, Fragment} from 'react';
import Intro from './components/intro/intro';
import Welcome from './components/welcome/welcome';
import Rules from './components/rules/rules';
import GameOne from "./components/game/game-one";
import GameTwo from "./components/game/game-two";
import GameThree from "./components/game/game-three";
import Stats from "./components/stats/stats";
import ModalError from "./components/modal/modal-error";
import ModalConfirm from "./components/modal/modal-confirm";
import Footer from "./components/footer/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.screens = [Intro, Welcome, Rules, GameOne, GameTwo, GameThree, Stats, ModalError, ModalConfirm];
    this.state = {
      currentScreen: 0,
    };
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
    switch (this.state.currentScreen) {
      case 0:
        return <Intro
          handleSwitchToNextScreen={() => this.switchToNextScreen()}
          handleSwitchToWelcomeScreen={() => this.switchToWelcomeScreen()}
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
        return <GameOne
          handleSwitchToNextScreen={() => this.switchToNextScreen()}
          handleSwitchToWelcomeScreen={() => this.switchToWelcomeScreen()}
        />;
      case 4:
        return <GameTwo
          handleSwitchToNextScreen={() => this.switchToNextScreen()}
          handleSwitchToWelcomeScreen={() => this.switchToWelcomeScreen()}
        />;
      case 5:
        return <GameThree
          handleSwitchToNextScreen={() => this.switchToNextScreen()}
          handleSwitchToWelcomeScreen={() => this.switchToWelcomeScreen()}
        />;
      case 6:
        return <Stats handleSwitchToWelcomeScreen={() => this.switchToWelcomeScreen()}/>;
      case 7:
        return <ModalError />;
      case 8:
        return <ModalConfirm />;
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
