import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setArrays } from '../redux/actions/gameActions';
import RandomWar from './randomWar';
import Status from './status';

function Game(props) {

  let numbers_ar = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  let suits_ar = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setArrays(numbers_ar, suits_ar))
  }, [])

  return (
    <div className="container">
      <RandomWar />
      {/* <Status /> */}
    </div>
  )
}

export default Game