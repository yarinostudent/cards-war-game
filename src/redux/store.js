import { createStore } from 'redux';
import { cardReducer } from './reducers/cardsReducer'; import { composeWithDevTools } from 'redux-devtools-extension'
import * as gameActions from './actions/gameActions';

const composeEnhancers = composeWithDevTools({
  gameActions,
  trace: true,
  traceLimit: 25,
})
const appStore = createStore(cardReducer, composeEnhancers())
export default appStore;