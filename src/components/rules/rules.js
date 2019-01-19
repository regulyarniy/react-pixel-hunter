import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import Header from "../header/header";

const Rules = (props) => {
  return (
    <Fragment>
      <Header
        isGameScreen={false}
        handleSwitchToWelcomeScreen={props.handleSwitchToWelcomeScreen}
      />
      <section className="rules">
        <h2 className="rules__title">Правила</h2>
        <ul className="rules__description">
          <li>Угадай 10 раз для каждого изображения фото
            <img className="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"/> или рисунок
            <img className="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"/>
          </li>
          <li>Фотографиями или рисунками могут быть оба изображения.</li>
          <li>На каждую попытку отводится 30 секунд.</li>
          <li>Ошибиться можно не более 3 раз.</li>
        </ul>
        <p className="rules__ready">Готовы?</p>
        <form className="rules__form" onSubmit={props.handleSwitchToNextScreen}>
          <input className="rules__input" type="text" placeholder="Ваше Имя"/>
          <button className="rules__button  continue" type="submit">Go!</button>
        </form>
      </section>
    </Fragment>
  );
};

Rules.propTypes = {
  handleSwitchToNextScreen: PropTypes.func.isRequired,
  handleSwitchToWelcomeScreen: PropTypes.func.isRequired
};

export default Rules;
