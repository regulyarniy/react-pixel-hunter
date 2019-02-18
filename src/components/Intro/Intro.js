import React from 'react';
import {Link} from "react-router-dom";
import Context from "../../context";

const Intro = () => {
  return (

    <section className="intro">
      <Link to="/welcome">
        <Context.Consumer>
          {({questions}) => (
            <button className="intro__asterisk asterisk asterisk--loading"
              type="button"
              disabled={!questions}
            ><span className="visually-hidden">Продолжить</span>*
            </button>)}
        </Context.Consumer>
      </Link>
      <p className="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
      Sparnaay.</p>
    </section>);
};

export default Intro;
