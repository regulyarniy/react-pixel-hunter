import React from "react";
import { shallow } from "enzyme";
import GameStats from "./GameStats";

it(`renders without crashing`, () => {
  const mockProps = {
    answers: [],
    length: 10,
  };
  shallow(<GameStats {...mockProps} />);
});
