import React, {Fragment} from 'react';

const GameOne = () => {
  return (
    <Fragment>
      <header className="header">
        <button className="back">
          <span className="visually-hidden">Вернуться к началу</span>
          <svg className="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
            <use xlinkHref="img/sprite.svg#arrow-left"/>
          </svg>
          <svg className="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
            <use xlinkHref="img/sprite.svg#logo-small"/>
          </svg>
        </button>
        <div className="game__timer">NN</div>
        <div className="game__lives">
          <img src="img/heart__empty.svg" className="game__heart" alt=" Missed Life" width="31" height="27"/>
          <img src="img/heart__full.svg" className="game__heart" alt="Life" width="31" height="27"/>
          <img src="img/heart__full.svg" className="game__heart" alt="Life" width="31" height="27"/>
        </div>
      </header>
      <section className="game">
        <p className="game__task">Угадайте для каждого изображения фото или рисунок?</p>
        <form className="game__content">
          <div className="game__option">
            <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458"/>
            <label className="game__answer game__answer--photo">
              <input className="visually-hidden" name="question1" type="radio" value="photo"/>
              <span>Фото</span>
            </label>
            <label className="game__answer game__answer--paint">
              <input className="visually-hidden" name="question1" type="radio" value="paint"/>
              <span>Рисунок</span>
            </label>
          </div>
          <div className="game__option">
            <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458"/>
            <label className="game__answer  game__answer--photo">
              <input className="visually-hidden" name="question2" type="radio" value="photo"/>
              <span>Фото</span>
            </label>
            <label className="game__answer  game__answer--paint">
              <input className="visually-hidden" name="question2" type="radio" value="paint"/>
              <span>Рисунок</span>
            </label>
          </div>
        </form>
        <ul className="stats">
          <li className="stats__result stats__result--wrong"/>
          <li className="stats__result stats__result--slow"/>
          <li className="stats__result stats__result--fast"/>
          <li className="stats__result stats__result--correct"/>
          <li className="stats__result stats__result--unknown"/>
          <li className="stats__result stats__result--unknown"/>
          <li className="stats__result stats__result--unknown"/>
          <li className="stats__result stats__result--unknown"/>
          <li className="stats__result stats__result--unknown"/>
          <li className="stats__result stats__result--unknown"/>
        </ul>
      </section>
    </Fragment>
  );
};

export default GameOne;
