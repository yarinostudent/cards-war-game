import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { randomCards, setActivateChecker } from '../redux/actions/gameActions';
import { ActionTypes } from '../redux/actionTypes/actionTypes';
import Status from './status';

function RandomWar(props) {

  const dispatch = useDispatch();
  const [player, setPlayer] = useState("");
  const [winSituation, setWinSituation] = useState(false);

  const activateChecker = useSelector((state) => state.activateChecker)
  const player1 = useSelector((state) => state.player1)
  const player2 = useSelector((state) => state.player2)

  //first load and no localStorage = trigger the function
  useEffect(() => {
    if (localStorage.getItem('state') != null) {
      // checkWhoWin();
      dispatch(setActivateChecker(activateChecker))
    }
  }, [])

  //trigger the function every activateChecker change unless its the first load
  useEffect(() => {
    if (activateChecker != null) {
      console.log(activateChecker);
      checkWhoWin();
    }
  }, [activateChecker])

  //Checing who won and setting the winner in the dom, if even generates card 3 times and last round is the winner
  const checkWhoWin = () => {
    if (player1.card.isWin && !player2.card.isWin) {
      setPlayer(player1.name + " Won!")
      dispatch({ type: ActionTypes.ADD_TO_SCORE1, payload: player1.score + 1 })
      if (player1.score >= 9) {
        setWinSituation(true);
      }
    } else if (player2.card.isWin && !player1.card.isWin) {
      setPlayer(player2.name + " Won!")
      dispatch({ type: ActionTypes.ADD_TO_SCORE2, payload: player2.score + 1 })
      if (player2.score >= 9) {
        setWinSituation(true);
      }
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
    <div className={`container-fluid ${activateChecker != null ? 'bg-success' : ''}`} style={{ minHeight: '100vh' }} >
      <div className="container text-center">
        {activateChecker == null ?
          (
            <div className="row justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
              <div>
                <h2>Instructions:</h2>
                <ul>
                  <li>Every click on the fight button will generate a new cards for each player.</li>
                  <li>Which one to get the higher card will win the round.</li>
                  <li>If the card are even, so the game will generate 3 rounds and the third one will detemine the winner of the round.</li>
                  <li>First player to reach 10 points will win the game.</li>
                </ul>
              </div>
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
              <div className="row text-center justify-content-evenly">
                {!winSituation ?
                  <>
                    <div className="col">
                      <h3><span className="border-bottom">{player1.name}</span></h3>
                      <div className="">
                        <img src={`./cards-images/${player1.card.suit}/${player1.card.num}.png`} className="img-fluid" />
                      </div>
                    </div>
                    <div className="col d-flex flex-column mt-5 justify-content-center align-items-center">
                      <button onClick={() => {
                        setPlayer('Generating')
                        dispatch(randomCards());
                        setTimeout(() => {
                          dispatch(setActivateChecker(activateChecker))
                        }, 600)
                      }} className={`btn btn-danger fs-3 rounded ${player == "Even" || player == "Generating" || player >= 1 ? 'disabled' : ''}`}><i className="fa fa-repeat" aria-hidden="true"></i></button>
                      <div className="text-dark fw-bold fs-1 mb-3 mt-3">
                        {player}
                      </div>
                    </div>
                    <div className="col">
                      <h3><span className="border-bottom">{player2.name}</span></h3>
                      <img src={`./cards-images/${player2.card.suit}/${player2.card.num}.png`} className="img-fluid" />
                    </div>
                  </>
                  :
                  <div className="col">
                    <div className="d-flex flex-column justify-content-around align-items-center shadow-lg p-5 mb-5 bg-primary">
                      <h1><i className="fa text-warning fs-1 fa-trophy" aria-hidden="true"></i>{player}<i className="fa text-warning fs-1 fa-trophy" aria-hidden="true"></i></h1>
                      <h4>With an advantage of {`${player1.score > player2.score ? player1.score - player2.score : player2.score - player1.score} Points!`}</h4>
                    </div>
                  </div>
                }
              </div>
              <div className="d-flex mt-2">
                <Status />
              </div>
              <div className="d-flex justify-content-center">
                <NavLink to="/" className={`btn w-25 btn-dark mb-3 ${player == "Even" || player == "Generating" || player >= 1 ? 'disabled' : ''}`}>New Game</NavLink>
              </div>
            </>
          )
        }
      </div >
    </div >
  )
}

export default RandomWar