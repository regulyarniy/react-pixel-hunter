import React, {Fragment, Component} from 'react';
import PropTypes from "prop-types";
import Header from "../Header/Header";
import imgIconPhoto from "../../img/icon-photo.png";
import imgIconPaint from "../../img/icon-paint.png";
import Store from "../../Store";

class Rules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: ``
    };
  }

  render() {
    return (
      <Fragment>
        <Header isGameScreen={false}/>
        <section className="rules">
          <h2 className="rules__title">Правила</h2>
          <ul className="rules__description">
            <li>Угадай 10 раз для каждого изображения фото
              <img className="rules__icon" src={imgIconPhoto} width="32" height="31" alt="Фото"/> или рисунок
              <img className="rules__icon" src={imgIconPaint} width="32" height="31" alt="Рисунок"/>
            </li>
            <li>Фотографиями или рисунками могут быть оба изображения.</li>
            <li>На каждую попытку отводится 30 секунд.</li>
            <li>Ошибиться можно не более 3 раз.</li>
          </ul>
          <p className="rules__ready">Готовы?</p>
          <form className="rules__form" onSubmit={this.handleSubmit.bind(this)}>
            <input
              className="rules__input"
              type="text"
              placeholder="Ваше Имя"
              value={this.state.playerName}
              onChange={this.handleChange.bind(this)}/>
            <button
              className="rules__button  continue"
              type="submit"
              disabled={!this.state.playerName}
            >Go!</button>
          </form>
        </section>
      </Fragment>
    );
  }

  handleChange(event) {
    this.setState({playerName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.context.changeName(this.state.playerName);
    this.props.history.push(`/game`);
  }

}

Rules.propTypes = {
  history: PropTypes.object.isRequired
};

Rules.defaultProps = {
  history: {push: ()=>{}}
};

Rules.contextType = Store;

export default Rules;
