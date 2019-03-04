import React from 'react';
import {shallow} from "enzyme";
import GameTinder from './GameTinder';

it(`renders without crashing`, () => {
  shallow(<GameTinder />);
});
