import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {MemoryRouter} from "react-router-dom";

describe(`App component`, () => {
  const mockFn = jest.fn();

  it(`renders without crashing`, () => {
    const div = document.createElement(`div`);
    ReactDOM.render(<MemoryRouter><App dispatch={mockFn}/></MemoryRouter>, div);
  });
});
