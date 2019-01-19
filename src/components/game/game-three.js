import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import Header from "../header/header";

const GameThree = (props) => {
  return (
    <Fragment>
      <Header
        isGameScreen={true}
        handleSwitchToWelcomeScreen={props.handleSwitchToWelcomeScreen}
      />
      <section className="game">
        <p className="game__task">Найдите рисунок среди изображений</p>
        <form className="game__content  game__content--triple">
          <div onClick={props.handleSwitchToNextScreen} className="game__option">
            <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455"/>
          </div>
          <div onClick={props.handleSwitchToNextScreen} className="game__option  game__option--selected">
            <img src="http://placehold.it/304x455" alt="Option 2" width="304" height="455"/>
          </div>
          <div onClick={props.handleSwitchToNextScreen} className="game__option">
            <img src="http://placehold.it/304x455" alt="Option 3" width="304" height="455"/>
          </div>
        </form>
        <ul className="stats">
          <li className="stats__result stats__result--wrong"/>
          <li className="stats__result stats__result--slow"/>
          <li className="stats__result stats__result--fast"/>
          <li className="stats__result stats__result--correct"/>
          <li className="stats__result stats__result--wrong"/>
          <li className="stats__result stats__result--unknown"/>
          <li className="stats__result stats__result--slow"/>
          <li className="stats__result stats__result--unknown"/>
          <li className="stats__result stats__result--fast"/>
          <li className="stats__result stats__result--unknown"/>
        </ul>
      </section>
    </Fragment>
  );
};

GameThree.propTypes = {
  handleSwitchToNextScreen: PropTypes.func.isRequired,
  handleSwitchToWelcomeScreen: PropTypes.func.isRequired
};

export default GameThree;
