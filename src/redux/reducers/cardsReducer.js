import { ActionTypes } from "../actionTypes/actionTypes"

export const initState = {
  player1: {
    score: 0
  },
  player2: {
    score: 0
  },
  numbers_ar: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  suits_ar: ['Hearts', 'Diamonds', 'Spades', 'Clubs']
}

export const cardReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PLAYERS:
      return {
        ...state,
        player1: {
          ...state.player1,
          name: payload[0]
        },
        player2: {
          ...state.player2,
          name: payload[1]
        }
      };
    case ActionTypes.RND_CARDS:
      return {
        ...state,
        player1: {
          ...state.player1,
          score: payload.player1obj.score,
          card: {
            num: payload.player1obj.num,
            suit: payload.player1obj.suit,
            isWin: payload.player1obj.isWin
          }
        },
        player2: {
          ...state.player2,
          score: payload.player2obj.score,
          card: {
            num: payload.player2obj.num,
            suit: payload.player2obj.suit,
            isWin: payload.player2obj.isWin
          }
        }
      };
    case ActionTypes.ADD_TO_SCORE1:
      return {
        ...state,
        player1: {
          ...state.player1,
          score: payload
        }
      };
    case ActionTypes.ADD_TO_SCORE2:
      return {
        ...state,
        player2: {
          ...state.player2,
          score: payload
        }
      };
    case ActionTypes.NEW_GAME:
      return state;
    case ActionTypes.RESET_GAME:
      return state;
    default:
      return state;
  }
}


