import React from 'react';
import { useSelector } from 'react-redux';

function Status(props) {

  const player1 = useSelector((state) => state.player1)
  const player2 = useSelector((state) => state.player2)

  return (
    <div className="container">
      <div className="row text-center justify-content-center">
        <table className="table table-striped w-25">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{player1.name}</td>
              <td>{player1.score}</td>
            </tr>
            <tr>
              <td>{player2.name}</td>
              <td>{player2.score}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Status