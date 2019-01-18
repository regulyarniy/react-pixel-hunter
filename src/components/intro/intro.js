import React from 'react';

const Intro = () => {
  return (
    <section className="intro">
      <button className="intro__asterisk asterisk" type="button"><span className="visually-hidden">Продолжить</span>*
      </button>
      <p className="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
      Sparnaay.</p>
    </section>);
};

export default Intro;
