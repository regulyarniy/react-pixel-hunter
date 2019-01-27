import mockAxios from "axios";
import getQuestions from "./get-questions";

it(`calls axios and return questions`, async () => {
  // setup
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({data:
    [
      {
        type: `two-of-two`,
        question: `Угадайте для каждого изображения фото или рисунок?`,
        answers: [
          {
            image: {
              url: `http://i.imgur.com/UIHVp0P.jpg`,
              width: 468,
              height: 458
            },
            type: `photo`
          },
          {
            image: {
              url: `http://i.imgur.com/eSlWjE7.jpg`,
              width: 468,
              height: 458
            },
            type: `photo`
          }
        ]
      },
      {
        type: `one-of-three`,
        question: `Найдите рисунок среди изображений`,
        answers: [
          {
            image: {
              url: `http://i.imgur.com/rY9u55S.jpg`,
              width: 304,
              height: 455
            },
            type: `photo`
          },
          {
            image: {
              url: `http://i.imgur.com/ncXRs5Y.jpg`,
              width: 304,
              height: 455
            },
            type: `photo`
          },
          {
            image: {
              url: `https://k39.kn3.net/E07A38605.jpg`,
              width: 304,
              height: 455
            },
            type: `painting`
          }
        ]
      },
      {
        type: `tinder-like`,
        question: `Угадай, фото или рисунок?`,
        answers: [
          {
            image: {
              url: `http://i.imgur.com/dWTKNtv.jpg`,
              width: 705,
              height: 455
            },
            type: `photo`
          }
        ]
      }
    ]
  }));

  // work
  let questions = null;
  await getQuestions((response) => (questions = response));

  // assert
  expect(questions).toEqual([
    {
      type: `two-of-two`,
      question: `Угадайте для каждого изображения фото или рисунок?`,
      answers: [
        {
          image: {
            url: `http://i.imgur.com/UIHVp0P.jpg`,
            width: 468,
            height: 458
          },
          type: `photo`
        },
        {
          image: {
            url: `http://i.imgur.com/eSlWjE7.jpg`,
            width: 468,
            height: 458
          },
          type: `photo`
        }
      ]
    },
    {
      type: `one-of-three`,
      question: `Найдите рисунок среди изображений`,
      answers: [
        {
          image: {
            url: `http://i.imgur.com/rY9u55S.jpg`,
            width: 304,
            height: 455
          },
          type: `photo`
        },
        {
          image: {
            url: `http://i.imgur.com/ncXRs5Y.jpg`,
            width: 304,
            height: 455
          },
          type: `photo`
        },
        {
          image: {
            url: `https://k39.kn3.net/E07A38605.jpg`,
            width: 304,
            height: 455
          },
          type: `painting`
        }
      ]
    },
    {
      type: `tinder-like`,
      question: `Угадай, фото или рисунок?`,
      answers: [
        {
          image: {
            url: `http://i.imgur.com/dWTKNtv.jpg`,
            width: 705,
            height: 455
          },
          type: `photo`
        }
      ]
    }
  ]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(`https://es.dump.academy/pixel-hunter/questions`);
});
