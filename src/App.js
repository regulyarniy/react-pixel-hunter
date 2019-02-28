import React, {Component, Fragment} from 'react';
import Intro from './components/Intro/Intro';
import Welcome from './components/Welcome/Welcome';
import Rules from './components/Rules/Rules';
import Game from "./components/Game/Game";
import Stats from "./components/Stats/Stats";
import Footer from "./components/Footer/Footer";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Timer} from "./constants/constants";
import Context from "./context.js";
import {connect} from "react-redux";
import {operations} from "./store/index";

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    errorText: state.error,
    name: state.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestions: () => dispatch(operations.getQuestions()),
    setName: (name) => dispatch(operations.setName(name))
  };
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      errorText: null,
      timeLeft: Timer.START_VALUE.toString(),
    };

    this._timer = Timer.START_VALUE;
    this._ticker = null;

    this.handlers = {
      resetTimer: this._resetTimer.bind(this)
    };
  }

  componentDidMount() {
    this.props.getQuestions();
    this.setState({questions: this.props.questions});
  }

  render() {
    const sharedData = Object.assign({}, this.state, this.handlers);
    const {setName, name} = this.props;
    return (
      <Context.Provider value={sharedData}>
        <Router basename={process.env.PUBLIC_URL}>
          <Fragment>
            <main id="main" className="central">
              <Route path="/" exact component={Intro}/>
              <Route path="/welcome" exact component={Welcome}/>
              <Route path="/rules" exact render={(props) => <Rules name={name} onSetName={setName} {...props}/>}/>
              <Route path="/game" exact component={Game}/>
              <Route path="/stats" exact component={Stats}/>
            </main>
            <Route component={Footer}/>
          </Fragment>
        </Router>
      </Context.Provider>
    );
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

App.contextType = Context;

App.propTypes = {
  questions: PropTypes.array,
  getQuestions: PropTypes.func,
  setName: PropTypes.func,
  name: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
