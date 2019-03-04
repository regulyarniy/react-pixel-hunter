export const API = {
  GameTypes: {
    OF_THREE: `one-of-three`,
    OF_TWO: `two-of-two`,
    TINDER: `tinder-like`
  },
  URL_BASE: `https://es.dump.academy/pixel-hunter`,
  ENDPOINT_QUESTIONS: `questions`
};

export const Timer = {
  INTERVAL: 1000, // interval is ms,
  START_VALUE: 30,
  STOP_VALUE: 0,
  DECREMENT: 1, // value*inverval ms
  STRING_SHIFT: 10, // correction for string format
  BLINK_START: 5 // second when timer starts blinking
};

export const Answer = {
  PHOTO: `photo`,
  PAINT: `painting`,
  [`Найдите фото среди изображений`]: `photo`,
  [`Найдите рисунок среди изображений`]: `painting`
};
