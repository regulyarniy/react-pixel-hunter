import React from 'react';
import ReactDOM from 'react-dom';
import GameOfTwo from './GameOfTwo';

it(`renders without crashing`, () => {
  const div = document.createElement(`div`);
  ReactDOM.render(<GameOfTwo />, div);
});
