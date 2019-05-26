import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import imgIconPhoto from "../../img/icon-photo.png";
import imgIconPaint from "../../img/icon-paint.png";

class Rules extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: ``,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ name: this.props.name });
  }

  render() {
    return (
      <Fragment>
        <Header isGameScreen={false} />
        <main id="main" className="central">
          <section className="rules">
            <h2 className="rules__title">Правила</h2>
            <ul className="rules__description">
              <li>
                Угадай 10 раз для каждого изображения фото
                <img
                  className="rules__icon"
                  src={imgIconPhoto}
                  width="32"
                  height="31"
                  alt="Фото"
                />{" "}
                или рисунок
                <img
                  className="rules__icon"
                  src={imgIconPaint}
                  width="32"
                  height="31"
                  alt="Рисунок"
                />
              </li>
              <li>Фотографиями или рисунками могут быть оба изображения.</li>
              <li>На каждую попытку отводится 30 секунд.</li>
              <li>Ошибиться можно не более 3 раз.</li>
            </ul>
            <p className="rules__ready">Готовы?</p>
            <form className="rules__form" onSubmit={this.handleSubmit}>
              <input
                className="rules__input"
                type="text"
                placeholder="Ваше Имя"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <button
                className="rules__button  continue"
                type="submit"
                disabled={!this.state.name}
              >
                Go!
              </button>
            </form>
          </section>
        </main>
      </Fragment>
    );
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSetName(this.state.name);
    this.props.history.push(`/game`);
  }
}

Rules.propTypes = {
  history: PropTypes.object,
  onSetName: PropTypes.func,
  name: PropTypes.string,
};

export default Rules;
