import React from 'react';
import {Link} from "react-router-dom";
import Store from "../../Store";

const Intro = () => {
  return (

    <section className="intro">
      <Link to="/welcome">
        <Store.Consumer>
          {({questions}) => (
            <button className="intro__asterisk asterisk asterisk--loading"
              type="button"
              disabled={!questions}
            ><span className="visually-hidden">Продолжить</span>*
            </button>)}
        </Store.Consumer>
      </Link>
      <p className="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
      Sparnaay.</p>
    </section>);
};

export default Intro;
