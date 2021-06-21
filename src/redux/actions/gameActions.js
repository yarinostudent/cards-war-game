import { ActionTypes } from "../actionTypes/actionTypes";
import { random } from 'lodash';
import { useSelector } from "react-redux";

export const setArrays = () => {
  const numbers_ar = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  const suits_ar = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  return {
    type: ActionTypes.SET_ARRAYS,
    payload: { numbers_ar, suits_ar }
  }
}
export const setPlayers = (player1name, player2name) => {
  return {
    type: ActionTypes.SET_PLAYERS,
    payload: [player1name, player2name]
  }
}

export const randomCards = () => {
  const arrays = setArrays();
  const { numbers_ar, suits_ar } = arrays.payload;
  console.log("randomCards Function");
  console.log(numbers_ar);
  let player1obj = {
    num: numbers_ar[random(12)],
    suit: suits_ar[random(3)]
  }
  console.log("player1 rnd", player1obj);
  let rand = random(12);
  console.log(rand);
  let player2obj = {
    num: numbers_ar[rand],
    suit: suits_ar[random(3)]
  }
  console.log("player2 rnd", player2obj);

  while (player1obj.suit === player2obj.suit) {
    console.log("While");
    player2obj.suit = suits_ar[random(3)];
  }

  return {
    type: ActionTypes.RND_CARDS,
    payload: { player1obj, player2obj }
  }
}

export const checkWhoWon = () => {
  console.log("randomCards Function");
  return {
    type: ActionTypes.RND_CARDS,
    payload: ""
  }
}