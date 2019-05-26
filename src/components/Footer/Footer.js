import React from "react";
import sprite from "../../img/sprite.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://htmlacademy.ru" className="social-link">
        <span className="visually-hidden">HTML Academy</span>
        <svg
          className="icon"
          width="108"
          height="37"
          viewBox="0 0 108 37"
          fill="#000000"
        >
          <use xlinkHref={`${sprite}#logo-htmla`} />
        </svg>
      </a>
      <span className="footer__made-in">
        Сделано в{" "}
        <a href="https://htmlacademy.ru" className="footer__link">
          HTML Academy
        </a>{" "}
        &copy; 2018
      </span>
      <div className="footer__social-links">
        <a href="https://twitter.com/htmlacademy_ru" className="social-link">
          <span className="visually-hidden">Твиттер</span>
          <svg
            className="icon"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="#000000"
          >
            <use xlinkHref={`${sprite}#icon-tw`} />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/htmlacademy/"
          className="social-link"
        >
          <span className="visually-hidden">Инстаграм</span>
          <svg
            className="icon"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="#000000"
          >
            <use xlinkHref={`${sprite}#icon-ig`} />
          </svg>
        </a>
        <a href="https://www.facebook.com/htmlacademy" className="social-link">
          <span className="visually-hidden">Фейсбук</span>
          <svg
            className="icon"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="#000000"
          >
            <use xlinkHref={`${sprite}#icon-fb`} />
          </svg>
        </a>
        <a href="https://vk.com/htmlacademy" className="social-link">
          <span className="visually-hidden">ВКонтакте</span>
          <svg
            className="icon"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="#000000"
          >
            <use xlinkHref={`${sprite}#icon-vk`} />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
