import { createStore } from 'redux';
import { cardReducer } from './reducers/cardsReducer';

const appStore = createStore(cardReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default appStore;