import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setPlayers } from '../redux/actions/gameActions';
import { ActionTypes } from '../redux/actionTypes/actionTypes';

function SetGame(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  const [err, setErr] = useState(false);

  const player1 = useRef();
  const player2 = useRef();

  //Reset
  useEffect(() => {
    localStorage.clear();
    dispatch({ type: ActionTypes.SET_ACTIVATE_CHECKER, payload: null })
  }, [])

  //Validate Names and moving to the game comp if true, show error if false
  const onSubmit = () => {
    if (player1.current.value && player2.current.value) {
      dispatch(setPlayers(player1.current.value, player2.current.value))
      history.push("/startGame")
    } else {
      setErr(true);
    }
  }

  return (
    <div className="container text-center">
      <h2>Welcome To Cards War Game</h2>
      <h4>Please Enter Your Names: </h4>
      <div className="row justify-content-center">
        <div className="col-lg-2">
          <input ref={player1} type="text" className={`form-control mb-3 ${err ? 'border-danger' : ''}`} placeholder="Player 1" />
          <input ref={player2} type="text" className={`form-control mb-3 ${err ? 'border-danger' : ''}`} placeholder="Player 2" />
          <button onClick={onSubmit} className="btn btn-info rounded">Start Game</button>
        </div>
        {err &&
          <h1 className="mt-5">
            <span className="bg-light text-danger p-1">
              * Please Fill The Names Fields To Start The Game
            </span>
          </h1>
        }
      </div>
    </div >
  )
}

export default SetGame