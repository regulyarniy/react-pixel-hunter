import React from "react";
import { shallow } from "enzyme";
import GameOfThree from "./GameOfThree";

it(`renders without crashing`, () => {
  const mockProps = {
    onAnswer: jest.fn(),
    answers: [
      {
        image: {
          url: `http://i.imgur.com/rY9u55S.jpg`,
          width: 304,
          height: 455,
        },
        type: `photo`,
      },
      {
        image: {
          url: `http://i.imgur.com/ncXRs5Y.jpg`,
          width: 304,
          height: 455,
        },
        type: `photo`,
      },
      {
        image: {
          url: `https://k39.kn3.net/E07A38605.jpg`,
          width: 304,
          height: 455,
        },
        type: `painting`,
      },
    ],
  };

  shallow(<GameOfThree {...mockProps} />);
});
