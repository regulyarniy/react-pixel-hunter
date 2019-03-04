import React from 'react';
import {shallow} from "enzyme";
import GameOfThree from './GameOfThree';

it(`renders without crashing`, () => {
  shallow(<GameOfThree />);
});
