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
        <button className="prev-screen" onClick={() => this.handleSwitchToPrevScreenClick()}>prev</button>
        <button className="next-screen" onClick={() => this.handleSwitchToNextScreenClick()}>next</button>
        {this.screens[this.state.currentScreen]()}
      </Fragment>
    );
  }

  handleSwitchToNextScreenClick() {
    const nextScreenNumber = this.state.currentScreen + 1;
    this.setState({
      currentScreen: nextScreenNumber < this.screens.length ? nextScreenNumber : 0
    });
  }

  handleSwitchToPrevScreenClick() {
    const prevScreenNumber = this.state.currentScreen - 1;
    this.setState({
      currentScreen: prevScreenNumber < 0 ? this.screens.length - 1 : prevScreenNumber
    });
  }
}

export default App;
