import React from 'react';
import ReactDOM from 'react-dom';
import GameOfThree from './GameOfThree';

it(`renders without crashing`, () => {
  const div = document.createElement(`div`);
  ReactDOM.render(<GameOfThree />, div);
});
