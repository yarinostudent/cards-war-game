import { ActionTypes } from "../actionTypes/actionTypes"

export const initState = localStorage['state'] ? JSON.parse(localStorage.getItem('state')) : {
  player1: {},
  player2: {},
  numbers_ar: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  suits_ar: ['Hearts', 'Diamonds', 'Spades', 'Clubs'],
  activateChecker: null
}

export const cardReducer = (state = initState, { type, payload }) => {
  switch (type) {
    //checkWhoWin function trigger
    case ActionTypes.SET_ACTIVATE_CHECKER:
      return { ...state, activateChecker: payload }

    //Setting the Players names
    case ActionTypes.SET_PLAYERS:
      return {
        ...state,
        player1: {
          ...state.player1,
          score: 0,
          name: payload[0]
        },
        player2: {
          ...state.player2,
          score: 0,
          name: payload[1]
        }
      };

    // Generating cards + isWin prop true/false
    case ActionTypes.RND_CARDS:
      return {
        ...state,
        player1: {
          ...state.player1,
          card: {
            num: payload.player1obj.num,
            suit: payload.player1obj.suit,
            isWin: payload.player1obj.isWin
          }
        },
        player2: {
          ...state.player2,
          card: {
            num: payload.player2obj.num,
            suit: payload.player2obj.suit,
            isWin: payload.player2obj.isWin
          }
        }
      };

    //Adding score to player 1
    case ActionTypes.ADD_TO_SCORE1:
      return {
        ...state,
        player1: {
          ...state.player1,
          score: payload
        }
      };
    //Adding score to player 2
    case ActionTypes.ADD_TO_SCORE2:
      return {
        ...state,
        player2: {
          ...state.player2,
          score: payload
        }
      };
    default:
      return state;
  }
}


