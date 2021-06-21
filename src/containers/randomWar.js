import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomCards } from '../redux/actions/gameActions';

function RandomWar(props) {

  const dispatch = useDispatch();

  const player1 = useSelector((state) => state.player1)
  const player2 = useSelector((state) => state.player2)
  console.log(player1);
  const numbers_ar = useSelector((state) => state.numbers_ar);
  const suits_ar = useSelector((state) => state.suits_ar);
  console.log(numbers_ar);
  // const card1 = player1.card;
  // const card2 = player2.card;
  // console.log(card1, card2);
  


  return (
    <div className="container">
      <h3 className="text-center">The Battle Begins..</h3>
      <div className="row text-center justify-content-evenly">
        <div className="col-lg-4">
          <h3><span className="border-bottom">loadYarin</span></h3>
          <div className="">
            <img src={`./cards-images/${player1.card.suit}/${player1.card.num}.png`} className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center">
          <button onClick={() => {
            console.log('clicked');
            console.log(numbers_ar);
            dispatch(randomCards(numbers_ar, suits_ar));
          }} className="btn btn-danger fs-3 rounded">FIGHT!</button>
        </div>
        <div className="col-lg-4">
          <h3><span className="border-bottom">loadAviv</span></h3>
          <div className="">
            <img src={`./cards-images/${player2.card.suit}/${player2.card.num}.png`} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomWar