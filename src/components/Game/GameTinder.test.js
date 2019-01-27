import React from 'react';
import ReactDOM from 'react-dom';
import GameTinder from './GameTinder';

it(`renders without crashing`, () => {
  const div = document.createElement(`div`);
  ReactDOM.render(<GameTinder />, div);
});
