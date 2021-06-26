import { ActionTypes } from "../actionTypes/actionTypes";
import { random } from 'lodash';
import { initState as state } from '../reducers/cardsReducer';


export const getFirstState = () => {
  return {
    type: ActionTypes.GET_STATE,
    payload: ""
  }
}

export const setPlayers = (player1name, player2name) => {
  return {
    type: ActionTypes.SET_PLAYERS,
    payload: [player1name, player2name]
  }
}

export const randomCards = () => {
  console.log("randomCards Function");
  const { numbers_ar, suits_ar } = state;

  let player1obj = {
    num: numbers_ar[random(12)],
    suit: suits_ar[random(3)],
  }

  let player2obj = {
    num: numbers_ar[random(12)],
    suit: suits_ar[random(3)],
  }

  while (player1obj.suit === player2obj.suit && player1obj.num === player2obj.num) {
    console.log("While");
    player2obj.suit = suits_ar[random(3)];
  }
  let number1 = numbers_ar.indexOf(player1obj.num) + 1;
  let number2 = numbers_ar.indexOf(player2obj.num) + 1;

  if (number1 > number2) {
    //Win
    player1obj.isWin = true;
    //Lose
    player2obj.isWin = false;
  }
  if (number1 < number2) {
    //Win
    player2obj.isWin = true;
    // player2obj.score = state.player2.score + 1;
    //Lose
    player1obj.isWin = false;
    // player1obj.score = state.player1.score;
  }
  if (number1 === number2) {
    //Even
    player1obj.isWin = true;
    // player1obj.score = state.player1.score;
    player2obj.isWin = true;
    // player2obj.score = state.player2.score;
  }

  return {
    type: ActionTypes.RND_CARDS,
    payload: { player1obj, player2obj }
  }
}