import React from 'react';
import ReactDOM from 'react-dom';
import GameStats from './GameStats';

it(`renders without crashing`, () => {
  const div = document.createElement(`div`);
  ReactDOM.render(<GameStats />, div);
});
