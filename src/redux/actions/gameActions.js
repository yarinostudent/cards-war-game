import { ActionTypes } from "../actionTypes/actionTypes";
import { random } from 'lodash';
import { initState as state } from '../reducers/cardsReducer';
import appStore from "../store";


//Setting The Players Names
export const setPlayers = (player1name, player2name) => {
  return {
    type: ActionTypes.SET_PLAYERS,
    payload: [player1name, player2name]
  }
}

//Activating chekWhoWin Function in randomWar Component
export const setActivateChecker = (activateChecker) => {
  console.log("Saved To Local");
  localStorage.setItem('state', JSON.stringify(appStore.getState()));
  return {
    type: ActionTypes.SET_ACTIVATE_CHECKER,
    payload: !activateChecker
  }
}

//The Brain: Random cards every call for each players and check if they are equals then random again. Returns an object with 2 objects which  contains the cards and who win this round

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
    player1obj = {
      num: numbers_ar[random(12)],
      suit: suits_ar[random(3)],
    }
    player2obj = {
      num: numbers_ar[random(12)],
      suit: suits_ar[random(3)],
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
    //Lose 
    player1obj.isWin = false;
  }
  if (number1 === number2) {
    //Even
    player1obj.isWin = true;
    player2obj.isWin = true;
  }

  return {
    type: ActionTypes.RND_CARDS,
    payload: { player1obj, player2obj }
  }
}