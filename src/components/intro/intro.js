import React from 'react';
import PropTypes from "prop-types";

const Intro = (props) => {
  return (
    <section className="intro">
      <button className="intro__asterisk asterisk asterisk--loading"
        onClick={props.handleSwitchToNextScreen}
        type="button"
        disabled={!props.questions}
      ><span className="visually-hidden">Продолжить</span>*
      </button>
      <p className="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
      Sparnaay.</p>
    </section>);
};

Intro.propTypes = {
  handleSwitchToNextScreen: PropTypes.func.isRequired,
  questions: PropTypes.array
};

export default Intro;
