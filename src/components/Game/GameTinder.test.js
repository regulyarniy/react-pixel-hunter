import React from "react";
import { shallow } from "enzyme";
import GameTinder from "./GameTinder";

it(`renders without crashing`, () => {
  const mockProps = {
    answers: [
      {
        image: {
          url: `http://i.imgur.com/dWTKNtv.jpg`,
          width: 705,
          height: 455,
        },
        type: `photo`,
      },
    ],
    onAnswer: jest.fn(),
  };

  shallow(<GameTinder {...mockProps} />);
});
