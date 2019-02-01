import React from 'react';
import ReactDOM from 'react-dom';
import Stats from './Stats';
import {MemoryRouter} from "react-router-dom";

it(`renders without crashing`, () => {
  const div = document.createElement(`div`);
  ReactDOM.render(<MemoryRouter><Stats /></MemoryRouter>, div);
});
