import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Intro = ({ isQuestionsLoaded }) => {
  return (
    <main id="main" className="central">
      <section className="intro">
        <Link to="/welcome">
          <button
            className="intro__asterisk asterisk asterisk--loading"
            type="button"
            disabled={!isQuestionsLoaded}
          >
            <span className="visually-hidden">Продолжить</span>*
          </button>
        </Link>
        <p className="intro__motto">
          <sup>*</sup> Это не фото. Это рисунок маслом нидерландского
          художника-фотореалиста Tjalf Sparnaay.
        </p>
      </section>
    </main>
  );
};

Intro.propTypes = PropTypes.boolean;

export default Intro;
