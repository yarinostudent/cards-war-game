import React from 'react';
import RandomWar from './randomWar';
import Status from './status';

function Game(props) {

  return (
    <div className="container">
      <RandomWar />
      <Status />
    </div>
  )
}

export default Game