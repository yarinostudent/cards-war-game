import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { randomCards, randomCardsThunk, setActivateChecker, setPlayers } from '../redux/actions/gameActions';
import { ActionTypes } from '../redux/actionTypes/actionTypes';
import appStore from '../redux/store';
import Status from './status';

function RandomWar(props) {
  console.log("Run 3");

  const dispatch = useDispatch();

  const [player, setPlayer] = useState("");


  const activateChecker = useSelector((state) => state.activateChecker)
  const player1 = useSelector((state) => state.player1)
  const player2 = useSelector((state) => state.player2)
  const state = useSelector((state) => state)

  useEffect(() => {
    console.log("Use 1");
    console.log(localStorage.getItem('state'));
    if (localStorage.getItem('state') != null) {
      checkWhoWin();
    }
  }, [])

  useEffect(() => {
    console.log("Use 2");
    if (activateChecker != null) {
      checkWhoWin();
    }
  }, [activateChecker])


  const checkWhoWin = () => {
    console.log('checkWhoWin');
    if (player1.card.isWin && !player2.card.isWin) {
      setPlayer(player1.name + " Won!")
      dispatch({ type: ActionTypes.ADD_TO_SCORE1, payload: player1.score + 1 })
    } else if (player2.card.isWin && !player1.card.isWin) {
      setPlayer(player2.name + " Won!")
      dispatch({ type: ActionTypes.ADD_TO_SCORE2, payload: player2.score + 1 })
    } else {
      setPlayer("Even");
      let x = 3;
      for (let i = 3; i >= 1; i--) {
        console.log("For");
        setTimeout(() => {
          setPlayer(x);
          dispatch(randomCards());
          x--;
        }, 700 * (i + 1))
      }
      setTimeout(() => {
        dispatch(setActivateChecker(activateChecker))
      }, 3600)
    }
  }

  return (
    <div className="container mt-5 text-center">
      {activateChecker == null ?
        (
          <button onClick={() => {
            dispatch(randomCards());
            dispatch(setActivateChecker(activateChecker))
          }} className={`btn btn-danger fs-3 rounded`}>FIGHT!</button>
        )
        :
        (
          <>
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
                  dispatch(randomCards());
                  dispatch(setActivateChecker(activateChecker))
                }} className={`btn btn-danger fs-3 rounded ${player == "Even" || player >= 1 ? 'disabled' : ''}`}>FIGHT!</button>
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
          </>
        )
      }
    </div >
  )
}

export default RandomWar