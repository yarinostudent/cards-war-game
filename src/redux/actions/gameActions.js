import { ActionTypes } from "../actionTypes/actionTypes";
import { random } from 'lodash';
import { initState as state } from '../reducers/cardsReducer';


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
    suit: suits_ar[random(3)]
  }
  let rand = random(12);
  let player2obj = {
    num: numbers_ar[rand],
    suit: suits_ar[random(3)]
  }

  while (player1obj.suit === player2obj.suit && player1obj.num === player2obj.num) {
    console.log("While");
    player2obj.suit = suits_ar[random(3)];
  }
  let number1 = numbers_ar.indexOf(player1obj.num) + 1;
  let number2 = numbers_ar.indexOf(player2obj.num) + 1;
  let score1 = state.player1.score;
  let score2 = state.player2.score;
  console.log("score 1: ", score1);
  console.log("score 2: ", score2);

  if (number1 > number2) {
    player1obj.isWin = true;
    player2obj.isWin = false;
    score1 += 1;
    player1obj.score = score1;
  }
  if (number1 < number2) {
    player1obj.isWin = false;
    player2obj.isWin = true;
    score2 += 1;
    player2obj.score = score2;
  }
  if (number1 === number2) {
    player1obj.isWin = true;
    player2obj.isWin = true;
  }

  return {
    type: ActionTypes.RND_CARDS,
    payload: { player1obj, player2obj }
  }
}