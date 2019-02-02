import React, {Component, Fragment} from 'react';
import Intro from './components/Intro/Intro';
import Welcome from './components/Welcome/Welcome';
import Rules from './components/Rules/Rules';
import Game from "./components/Game/Game";
import Stats from "./components/Stats/Stats";
import Footer from "./components/Footer/Footer";
import getQuestions from "./services/get-questions";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Store from "./Store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      errorText: null,
      playerName: null
    };

    this.handlers = {
      changeName: this._changeName.bind(this)
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
    const sharedData = Object.assign({}, this.state, this.handlers);
    return (
      <Store.Provider value={sharedData}>
        <Router basename={process.env.PUBLIC_URL}>
          <Fragment>
            <main id="main" className="central">
              <Route path="/" exact component={Intro}/>
              <Route path="/welcome" exact component={Welcome}/>
              <Route path="/rules" exact component={Rules}/>
              <Route path="/game" exact component={Game}/>
              <Route path="/stats" exact component={Stats}/>
            </main>
            <Route component={Footer}/>
          </Fragment>
        </Router>
      </Store.Provider>
    );
  }

  _changeName(newName) {
    this.setState({name: newName});
  }
}

App.contextType = Store;

export default App;
