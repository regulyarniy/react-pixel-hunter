import React from "react";
import PropTypes from "prop-types";
import imgHeartEmpty from "../../img/heart__empty.svg";
import imgHeartFull from "../../img/heart__full.svg";
import sprite from "../../img/sprite.svg";
import {Link} from "react-router-dom";
import {Timer} from "../../constants/constants";

const Header = ({isGameScreen, timeLeft}) => {
  const livesIndicator = (
    <div className="game__lives">
      <img src={imgHeartEmpty} className="game__heart" alt=" Missed Life" width="31" height="27"/>
      <img src={imgHeartFull} className="game__heart" alt="Life" width="31" height="27"/>
      <img src={imgHeartFull} className="game__heart" alt="Life" width="31" height="27"/>
    </div>
  );
  const timerClass = timeLeft <= Timer.BLINK_START ? `game__timer game__timer--blink` : `game__timer`;
  const timer = isGameScreen ? <div className={timerClass}>{timeLeft}</div> : null;
  const lives = isGameScreen ? livesIndicator : null;
  return (
    <header className="header">
      <Link to="/welcome">
        <button className="back">
          <span className="visually-hidden">Вернуться к началу</span>
          <svg className="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
            <use xlinkHref={`${sprite}#arrow-left`}/>
          </svg>
          <svg className="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
            <use xlinkHref={`${sprite}#logo-small`}/>
          </svg>
        </button>
      </Link>
      {timer}
      {lives}
    </header>
  );
};

Header.propTypes = {
  isGameScreen: PropTypes.bool.isRequired,
  timeLeft: PropTypes.string,
};

Header.defaultProps = {
  isGameScreen: true,
};

export default Header;
