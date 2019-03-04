import React from 'react';
import {shallow} from "enzyme";
import Game from './Game';

it(`renders without crashing`, () => {
  const mockProps = {
    questions: [
      {
        type: `two-of-two`,
        question: `Угадайте для каждого изображения фото или рисунок?`,
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
      },
      {
        type: `one-of-three`,
        question: `Найдите рисунок среди изображений`,
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
      },
      {
        type: `tinder-like`,
        question: `Угадай, фото или рисунок?`,
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
      },
    ],
  };

  shallow(<Game {...mockProps}/>);
});
