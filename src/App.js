import React, {Component, Fragment} from 'react';
import Intro from './components/Intro/Intro';
import Welcome from './components/Welcome/Welcome';
import Rules from './components/Rules/Rules';
import Game from "./components/Game/Game";
import Stats from "./components/Stats/Stats";
import Footer from "./components/Footer/Footer";
import getQuestions from "./services/get-questions";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const {questions, errorText} = this.state;
    const sharedProps = {
      questions,
      errorText
    };
    return (
      <Router>
        <Fragment>
          <main id="main" className="central">
            <Route
              path={`${process.env.PUBLIC_URL}/`}
              exact
              component={(props) => <Intro {...props} {...sharedProps}/>}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/welcome`}
              exact
              component={(props) => <Welcome {...props} {...sharedProps}/>}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/rules`}
              exact
              component={(props) => <Rules {...props} {...sharedProps}/>}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/game`}
              exact
              component={(props) => <Game {...props} {...sharedProps}/>}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/stats`}
              exact
              component={(props) => <Stats {...props} {...sharedProps}/>}
            />
          </main>
          <Route component={Footer}/>
        </Fragment>
      </Router>
    );
  }
}

export default App;
