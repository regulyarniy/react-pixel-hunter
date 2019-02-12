import React from "react";
import PropTypes from "prop-types";
import imgHeartEmpty from "../../img/heart__empty.svg";
import imgHearFull from "../../img/heart__full.svg";
import sprite from "../../img/sprite.svg";
import {Link} from "react-router-dom";
import Store from "../../Store";

const Header = (props) => {
  const livesIndicator = (
    <div className="game__lives">
      <img src={imgHeartEmpty} className="game__heart" alt=" Missed Life" width="31" height="27"/>
      <img src={imgHearFull} className="game__heart" alt="Life" width="31" height="27"/>
      <img src={imgHearFull} className="game__heart" alt="Life" width="31" height="27"/>
    </div>
  );
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
      <Store.Consumer>
        {({timeLeft}) => props.isGameScreen ? <div className="game__timer">{timeLeft}</div> : null}
      </Store.Consumer>
      {props.isGameScreen ? livesIndicator : null}
    </header>
  );
};

Header.propTypes = {
  isGameScreen: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  isGameScreen: true,
};

export default Header;
