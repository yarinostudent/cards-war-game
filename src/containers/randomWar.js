import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomCards } from '../redux/actions/gameActions';

function RandomWar(props) {

  const dispatch = useDispatch();

  const player1 = useSelector((state) => state.player1)
  const player2 = useSelector((state) => state.player2)

  const numbers_ar1 = useSelector((state) => state.numbers_ar);
  const suit_ar1 = useSelector((state) => state.suits_ar);
  console.log(numbers_ar1, suit_ar1);
  // const card1 = player1.card;
  // const card2 = player2.card;
  // console.log(card1, card2);
  useEffect(() => {
    dispatch(randomCards(numbers_ar1, suit_ar1));
  }, [])

  return (
    <div className="container">
      <h3 className="text-center">The Battle Begins..</h3>
      <div className="row text-center justify-content-evenly">
        <div className="col-lg-4">
          <h3><span className="border-bottom">loadYarin</span></h3>
          <div className="">
            <img src={`./cards-images/Hearts/2.png`} className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center">
          <button onClick={() => {
            console.log('clicked');
            dispatch(randomCards(numbers_ar1, suit_ar1));
          }} className="btn btn-danger fs-3 rounded">FIGHT!</button>
        </div>
        <div className="col-lg-4">
          <h3><span className="border-bottom">loadAviv</span></h3>
          <div className="">
            <img src={`./cards-images/Diamonds/3.png`} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomWar