import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomCards, setArrays } from '../redux/actions/gameActions';
import RandomWar from './randomWar';

function Game(props) {

  let num_ar = useSelector((state) => state.numbers_ar)
  console.log(num_ar);
  const dispatch = useDispatch();


  return (
    <div className="container">
      <RandomWar />
      {/* <Status /> */}
    </div>
  )
}

export default Game