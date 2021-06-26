import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { randomCards } from '../redux/actions/gameActions';
import { ActionTypes } from '../redux/actionTypes/actionTypes';
import Status from './status';

function RandomWar(props) {

  const dispatch = useDispatch();

  const [player, setPlayer] = useState("");
  const [activateChecker, setActivateChecker] = useState(false);

  const player1 = useSelector((state) => state.player1)
  const player2 = useSelector((state) => state.player2)

  useEffect(() => {
    checkWhoWin();
  }, [])

  useEffect(() => {
    checkWhoWin();
  }, [activateChecker, setActivateChecker])

  const checkWhoWin = () => {
    if (player1.card.isWin && !player2.card.isWin) {
      setPlayer(player1.name + " Won!")
      dispatch({ type: ActionTypes.ADD_TO_SCORE1, payload: player1.score + 1 })
    } else if (player2.card.isWin && !player1.card.isWin) {
      setPlayer(player2.name + " Won!")
      dispatch({ type: ActionTypes.ADD_TO_SCORE2, payload: player2.score + 1 })
    } else {
      for (let i = 1; i <= 3; i++) {
        console.log(activateChecker);
        setTimeout(() => {
          dispatch(randomCards());
          if (i == 3) {
            setActivateChecker(!activateChecker);
          }
        }, 600 * i)

      }
      setPlayer("Even!")
    }
  }

  return (
    <div className="container mt-5 text-center">
      <h1 className="text-center mt-5 ">The Battle Begins..</h1>
      <div className="row row-cols-sm-3 text-center justify-content-evenly">
        <div className="col-lg-4">
          <h3><span className="border-bottom">{player1.name}</span></h3>
          <div className="">
            <img src={`./cards-images/${player1.card.suit}/${player1.card.num}.png`} className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-4 d-flex flex-column mt-5 justify-content-center align-items-center">
          <button onClick={() => {
            console.log('clicked');
            setActivateChecker(!activateChecker);
            dispatch(randomCards());
          }} className={`btn btn-danger fs-3 rounded ${player == "Even!" ? 'disabled' : ''}`}>FIGHT!</button>
          <div className="text-success fs-1 mb-3 mt-3">
            {player}
          </div>

        </div>
        <div className="col-lg-4">
          <h3><span className="border-bottom">{player2.name}</span></h3>
          <div className="">
            <img src={`./cards-images/${player2.card.suit}/${player2.card.num}.png`} className="img-fluid" />
          </div>
        </div>
        <Status />
      </div>
      <NavLink to="/" className="btn btn-dark">New Game</NavLink>
    </div >
  )
}

export default RandomWar