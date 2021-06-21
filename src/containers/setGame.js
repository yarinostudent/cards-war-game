import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { randomCards, setArrays, setPlayers } from '../redux/actions/gameActions';

function SetGame(props) {

  const dispatch = useDispatch();
  const player1 = useRef();
  const player2 = useRef();



  useEffect(() => {
    dispatch(setArrays());
    dispatch(randomCards());
  }, [])

  return (
    <div className="container text-center">
      <h2>Welcome To Cards War Game</h2>
      <h4>Please Enter Your Names: </h4>
      <div className="row justify-content-center">
        <div className="col-lg-2">
          <input ref={player1} type="text" className="form-control mb-3" placeholder="Player 1" defaultValue="Yarin" />
          <input ref={player2} type="text" className="form-control mb-3" placeholder="Player 2" defaultValue="Aviv" />
          <NavLink to="/startGame">
            <button onClick={() => {
              console.log(player1.current.value, player2.current.value);
              dispatch(setPlayers(player1.current.value, player2.current.value))
            }} className="btn btn-info rounded">Start Game</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default SetGame