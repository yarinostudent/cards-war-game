import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomCards } from '../redux/actions/gameActions';
import { ActionTypes } from '../redux/actionTypes/actionTypes';
import appStore from '../redux/store';

function RandomWar(props) {

  const dispatch = useDispatch();

  // const [playersExists, setPlayersExist] = useState(false);
  const [player, setPlayer] = useState("");

  const player1 = useSelector((state) => state.player1)
  const player2 = useSelector((state) => state.player2)

  useEffect(() => {
    console.log();
    checkWhoWin();
  }, [])

  const checkWhoWin = () => {
    console.log("checkWhoWin");
    console.log("player1 isWin? : ", player1.card.isWin);
    console.log("player2 isWin? : ", player2.card.isWin);

    if (player1.card.isWin && !player2.card.isWin) {
      console.log(player1.name + "Won!");
      setPlayer(player1.name + " Won!")
      dispatch({ type: ActionTypes.ADD_TO_SCORE1, payload: player1.score + 1 })
    } else if (player2.card.isWin && !player1.card.isWin) {
      console.log(player2.name + "Won!");
      setPlayer(player2.name + " Won!")
      dispatch({ type: ActionTypes.ADD_TO_SCORE2, payload: player2.score + 1 })
    } else {
      console.log("Even!");
      setPlayer("Even!")
    }
  }

  return (
    <div className="container">
      <h3 className="text-center">The Battle Begins..</h3>
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
            dispatch(randomCards());
            checkWhoWin();
          }} className="btn btn-danger fs-3 rounded">FIGHT!</button>
          <div className="text-success fs-1">
            {player}
          </div>
        </div>
        <div className="col-lg-4">
          <h3><span className="border-bottom">{player2.name}</span></h3>
          <div className="">
            <img src={`./cards-images/${player2.card.suit}/${player2.card.num}.png`} className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="text-success">

      </div>
    </div >
  )
}

export default RandomWar