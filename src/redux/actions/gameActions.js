import { ActionTypes } from "../actionTypes/actionTypes";
import { random } from 'lodash';
import { initState as state } from '../reducers/cardsReducer';


//Setting The Players Names
export const setPlayers = (player1name, player2name) => {
  return {
    type: ActionTypes.SET_PLAYERS,
    payload: [player1name, player2name]
  }
}

//The Brain: Random cards every call for each players and check if they are equals then random again. Returns an object with 2 objects which contains the cards if who win this round
export const randomCards = () => {
  console.log("randomCards Function");
  const { numbers_ar, suits_ar } = state;
  if (!localStorage['numbers_ar'] || !localStorage['suits_ar']) {
    localStorage.setItem('numbers_ar', JSON.stringify(numbers_ar));
    localStorage.setItem('suits_ar', JSON.stringify(suits_ar));
  }

  // num: localStorage['numbers_ar'] ? JSON.parse(localStorage['numbers_ar']) : numbers_ar[random(12)],
  //   suit: localStorage['suits_ar'] ? JSON.parse(localStorage['suits_ar']) : suits_ar[random(3)]
  console.log(JSON.parse(localStorage['numbers_ar'])[random(12)]);
  console.log(JSON.parse(localStorage['suits_ar'])[random(3)]);
  let player1obj = {

    num: JSON.parse(localStorage['numbers_ar'])[random(12)],
    suit: JSON.parse(localStorage['suits_ar'])[random(3)]
  }

  let player2obj = {
    num: JSON.parse(localStorage['numbers_ar'])[random(12)],
    suit: JSON.parse(localStorage['suits_ar'])[random(3)]
  }

  while (player1obj.suit === player2obj.suit && player1obj.num === player2obj.num) {
    console.log("While");
    player1obj = {
      num: JSON.parse(localStorage['numbers_ar'])[random(12)],
      suit: JSON.parse(localStorage['suits_ar'])[random(3)]
    }
    player2obj = {
      num: JSON.parse(localStorage['numbers_ar'])[random(12)],
      suit: JSON.parse(localStorage['suits_ar'])[random(3)]
    }
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