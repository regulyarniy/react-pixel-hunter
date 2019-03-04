import React from 'react';
import {shallow} from "enzyme";
import GameStats from './GameStats';

it(`renders without crashing`, () => {
  shallow(<GameStats />);
});
