import React, {Component, Fragment} from 'react';
import Intro from './components/Intro/Intro';
import Welcome from './components/Welcome/Welcome';
import Rules from './components/Rules/Rules';
import Game from "./components/Game/Game";
import Stats from "./components/Stats/Stats";
import Footer from "./components/Footer/Footer";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from "react-redux";
import {operations} from "./store/index";

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    errorText: state.error,
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestions: () => dispatch(operations.getQuestions()),
    setName: (name) => dispatch(operations.setName(name)),
  };
};

export class App extends Component {
  componentDidMount() {
    this.props.getQuestions();
    this.setState({questions: this.props.questions});
  }

  render() {
    const {setName, name, questions} = this.props;
    const isQuestionsLoaded = questions.length !== 0;
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Fragment>
          <Route path="/" exact render={() => <Intro isQuestionsLoaded={isQuestionsLoaded}/>}/>
          <Route path="/welcome" exact component={Welcome}/>
          <Route path="/rules" exact render={(props) => <Rules name={name} onSetName={setName} {...props}/>}/>
          <Route path="/game" exact component={Game}/>
          <Route path="/stats" exact component={Stats}/>
          <Footer/>
        </Fragment>
      </Router>
    );
  }
}

App.propTypes = {
  questions: PropTypes.array,
  getQuestions: PropTypes.func,
  setName: PropTypes.func,
  name: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
