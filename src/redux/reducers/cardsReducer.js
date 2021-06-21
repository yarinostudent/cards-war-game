import { ActionTypes } from "../actionTypes/actionTypes"

const initState = {
  player1: {},
  player2: {},
  numbers_ar: ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'],
  suits_ar: ['Hearts', 'Diamonds', 'Spades', 'Clubs']
}

export const cardReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ARRAYS:
      return {
        ...state,
        numbers_ar: payload.numbers_ar,
        suits_ar: payload.suits_ar
      };
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
          card: {
            num: payload.player1obj.num,
            suit: payload.player1obj.suit
          }
        },
        player2: {
          ...state.player2,
          card: {
            num: payload.player2obj.num,
            suit: payload.player2obj.suit
          }
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


// const checkWin = (num1, num2) => {
//   let num1 = initState.numbers_ar.indexOf(num1) + 1;
//   let num2 = initState.numbers_ar.indexOf(num2) + 1;
//   console.log(num1, num2);
//   if (num1 > num2) {
//     return 1;
//   }
//   if (num2 > num1) {
//     return 2;
//   }
//   else {
//     return 0
//   }
// }