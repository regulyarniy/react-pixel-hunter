import React from 'react';
import {App} from './App';
import {shallow} from "enzyme";

describe(`App component`, () => {
  const mockProps = {
    getQuestions: jest.fn(),
    questions: []
  };

  it(`renders without crashing`, () => {
    shallow(<App {...mockProps}/>);
  });
});
