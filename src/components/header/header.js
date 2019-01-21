import React from "react";
import PropTypes from "prop-types";
import imgHeartEmpty from "../../img/heart__empty.svg";
import imgHearFull from "../../img/heart__full.svg";
import sprite from "../../img/sprite.svg";

const Header = (props) => {
  const timerIndicator = <div className="game__timer">NN</div>;
  const livesIndicator = (
    <div className="game__lives">
      <img src={imgHeartEmpty} className="game__heart" alt=" Missed Life" width="31" height="27"/>
      <img src={imgHearFull} className="game__heart" alt="Life" width="31" height="27"/>
      <img src={imgHearFull} className="game__heart" alt="Life" width="31" height="27"/>
    </div>
  );
  return (
    <header className="header">
      <button onClick={props.handleSwitchToWelcomeScreen} className="back">
        <span className="visually-hidden">Вернуться к началу</span>
        <svg className="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
          <use xlinkHref={`${sprite}#arrow-left`}/>
        </svg>
        <svg className="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
          <use xlinkHref={`${sprite}#logo-small`}/>
        </svg>
      </button>
      {props.isGameScreen ? timerIndicator : null}
      {props.isGameScreen ? livesIndicator : null}
    </header>
  );
};

Header.propTypes = {
  isGameScreen: PropTypes.bool.isRequired,
  handleSwitchToWelcomeScreen: PropTypes.func.isRequired
};

export default Header;
