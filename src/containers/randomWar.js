import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { randomCards, setActivateChecker } from '../redux/actions/gameActions';
import { ActionTypes } from '../redux/actionTypes/actionTypes';
import Status from './status';

function RandomWar(props) {

  const dispatch = useDispatch();
  const [player, setPlayer] = useState("");

  const activateChecker = useSelector((state) => state.activateChecker)
  const player1 = useSelector((state) => state.player1)
  const player2 = useSelector((state) => state.player2)

  //first load and no storage trigger the function
  useEffect(() => {
    if (localStorage.getItem('state') != null) {
      checkWhoWin();
    }
  }, [])

  //trigger the function every activateChecker change unless its the first load
  useEffect(() => {
    if (activateChecker != null) {
      checkWhoWin();
    }
  }, [activateChecker])

  //Checing who won and setting the winner in the dom, if even generates card 3 times and last round is the winner
  const checkWhoWin = () => {
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
    <div className={`container-fluid ${activateChecker != null ? 'bg-success' : ''}`} >
      <div className="container text-center">
        {activateChecker == null ?
          (
            <div className="row justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
              <div className="col-lg-3">
                <button onClick={() => {
                  dispatch(randomCards());
                  dispatch(setActivateChecker(activateChecker))
                }} className={`btn btn-danger fs-3 rounded`}>FIGHT!</button>
              </div>
            </div>
          )
          :
          (
            <>
              <h1 className="text-center ">The Battle Begins..</h1>
              <div className="row row-cols-sm-3 text-center justify-content-evenly">
                <div className="col-lg-4">
                  <h3><span className="border-bottom">{player1.name}</span></h3>
                  <div className="">
                    <img src={`./cards-images/${player1.card.suit}/${player1.card.num}.png`} className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-4 d-flex flex-column mt-5 justify-content-center align-items-center">
                  <button onClick={() => {
                    setPlayer('Generating')
                    setTimeout(() => {
                      dispatch(randomCards());
                    }, 400)
                    setTimeout(() => {
                      dispatch(setActivateChecker(activateChecker))
                    }, 600)
                  }} className={`btn btn-danger fs-3 rounded ${player == "Even" || player == "Generating" || player >= 1 ? 'disabled' : ''}`}><i className="fa fa-repeat" aria-hidden="true"></i></button>
                  <div className="text-dark fw-bold fs-1 mb-3 mt-3">
                    {player}
                  </div>

                </div>
                <div className="col-lg-4">
                  <h3><span className="border-bottom">{player2.name}</span></h3>
                  <img src={`./cards-images/${player2.card.suit}/${player2.card.num}.png`} className="img-fluid" />
                </div>
                <Status />
              </div>
              <NavLink to="/" className={`btn btn-dark ${player == "Even" || player >= 1 ? 'disabled' : ''}`}>New Game</NavLink>
            </>
          )
        }
      </div >
    </div >
  )
}

export default RandomWar