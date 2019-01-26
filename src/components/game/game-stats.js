import React from "react";

const GameStats = () => {
  return (
    <ul className="stats">
      <li className="stats__result stats__result--wrong"/>
      <li className="stats__result stats__result--slow"/>
      <li className="stats__result stats__result--fast"/>
      <li className="stats__result stats__result--correct"/>
      <li className="stats__result stats__result--unknown"/>
      <li className="stats__result stats__result--unknown"/>
      <li className="stats__result stats__result--unknown"/>
      <li className="stats__result stats__result--unknown"/>
      <li className="stats__result stats__result--unknown"/>
      <li className="stats__result stats__result--unknown"/>
    </ul>
  );
};

export default GameStats;
