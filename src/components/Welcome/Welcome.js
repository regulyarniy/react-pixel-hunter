import React from "react";
import sprite from "../../img/sprite.svg";
import imgLogoPhBig from "../../img/logo_ph-big.svg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <main id="main" className="central">
      <section className="greeting central--blur">
        <img
          className="greeting__logo"
          src={imgLogoPhBig}
          width="201"
          height="89"
          alt="Pixel Hunter"
        />
        <div className="greeting__asterisk asterisk">
          <span className="visually-hidden">Я просто красивая звёздочка</span>*
        </div>
        <div className="greeting__challenge">
          <h3 className="greeting__challenge-title">
            Лучшие художники-фотореалисты бросают тебе вызов!
          </h3>
          <p className="greeting__challenge-text">Правила игры просты:</p>
          <ul className="greeting__challenge-list">
            <li>Нужно отличить рисунок от фотографии и сделать выбор.</li>
            <li>
              Задача кажется тривиальной, но не думай, что все так просто.
            </li>
            <li>Фотореализм обманчив и коварен.</li>
            <li>Помни, главное — смотреть очень внимательно.</li>
          </ul>
        </div>
        <Link to="/Rules">
          <button className="greeting__continue" type="button">
            <span className="visually-hidden">Продолжить</span>
            <svg
              className="icon"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="#000000"
            >
              <use xlinkHref={`${sprite}#arrow-right`} />
            </svg>
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Welcome;
