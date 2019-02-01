import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro';
import {MemoryRouter} from "react-router-dom";

it(`renders without crashing`, () => {
  const div = document.createElement(`div`);
  ReactDOM.render(<MemoryRouter><Intro /></MemoryRouter>, div);
});
