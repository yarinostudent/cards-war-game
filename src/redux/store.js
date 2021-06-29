import { applyMiddleware, createStore } from 'redux';
import { cardReducer } from './reducers/cardsReducer'; import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';


const appStore = createStore(cardReducer, composeWithDevTools(applyMiddleware(thunk)));

export default appStore;