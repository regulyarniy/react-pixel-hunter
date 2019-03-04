import React from 'react';
import {shallow} from "enzyme";
import GameOfTwo from './GameOfTwo';

it(`renders without crashing`, () => {
  shallow(<GameOfTwo />);
});
