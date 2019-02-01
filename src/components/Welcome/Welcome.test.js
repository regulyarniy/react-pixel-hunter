import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import {MemoryRouter} from "react-router-dom";

it(`renders without crashing`, () => {
  const div = document.createElement(`div`);
  ReactDOM.render(<MemoryRouter><Welcome /></MemoryRouter>, div);
});
