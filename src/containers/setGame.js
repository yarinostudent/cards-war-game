import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { randomCards, setPlayers } from '../redux/actions/gameActions';
import appStore from '../redux/store';

function SetGame(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  const [err, setErr] = useState(false);
  const state = useSelector((state) => state)

  const player1 = useRef();
  const player2 = useRef();

  const onSubmit = () => {
    if (player1.current.value && player2.current.value) {
      localStorage.setItem('name1', player1.current.value)
      localStorage.setItem('name2', player2.current.value)
      dispatch(setPlayers(localStorage['name1'], localStorage['name2']))
      dispatch(randomCards());
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
          <input ref={player1} type="text" className={`form-control mb-3 ${err ? 'border-danger' : ''}`} placeholder="Player 1" defaultValue="11" />
          <input ref={player2} type="text" className={`form-control mb-3 ${err ? 'border-danger' : ''}`} placeholder="Player 2" defaultValue="12" />
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