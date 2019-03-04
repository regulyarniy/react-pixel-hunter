import React from 'react';
import {shallow} from "enzyme";
import GameOfTwo from './GameOfTwo';

it(`renders without crashing`, () => {
  const mockProps = {
    handleSwitchToNextQuestion: () => {
    },
    answers: [
      {
        image: {
          url: `http://i.imgur.com/UIHVp0P.jpg`,
          width: 468,
          height: 458,
        },
        type: `photo`,
      },
      {
        image: {
          url: `http://i.imgur.com/eSlWjE7.jpg`,
          width: 468,
          height: 458,
        },
        type: `photo`,
      },
    ],
  };
  shallow(<GameOfTwo {...mockProps}/>);
});
