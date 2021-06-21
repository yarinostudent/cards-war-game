import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RandomWar from './randomWar';

function Game(props) {

  return (
    <div className="container">
      <RandomWar />
      {/* <Status /> */}
    </div>
  )
}

export default Game