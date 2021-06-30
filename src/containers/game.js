import React, { useEffect } from 'react';
import appStore from '../redux/store';
import RandomWar from './randomWar';
import Status from './status';

function Game(props) {
  console.log("Run 2");
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <RandomWar />
        {/* <Status /> */}
      </div>
    </div>
  )
}

export default Game