import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Intro = (props) => {
  return (
    <section className="intro">
      <Link to="/welcome">
        <button className="intro__asterisk asterisk asterisk--loading"
          type="button"
          disabled={!props.questions}
        ><span className="visually-hidden">Продолжить</span>*
        </button>
      </Link>
      <p className="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
      Sparnaay.</p>
    </section>);
};

Intro.propTypes = {
  questions: PropTypes.array
};

Intro.defaultProps = {
  questions: [``]
};

export default Intro;
