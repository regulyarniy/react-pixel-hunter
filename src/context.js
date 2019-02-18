import React from "react";

const defaultValue = {
  questions: null,
  errorText: null,
  playerName: null,
  timeLeft: ``,
  changeName: () => {},
  resetTimer: () => {}
};

const Context = React.createContext(defaultValue);

export default Context;
