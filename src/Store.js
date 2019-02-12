import React from "react";

const defaultValue = {
  questions: null,
  errorText: null,
  playerName: null,
  timeLeft: ``,
  changeName: () => {},
  resetTimer: () => {}
};

const Store = React.createContext(defaultValue);

export default Store;
