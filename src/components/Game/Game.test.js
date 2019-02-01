import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import {MemoryRouter} from "react-router-dom";

it(`renders without crashing`, () => {
  const div = document.createElement(`div`);
  ReactDOM.render(<MemoryRouter><Game/></MemoryRouter>, div);
});
