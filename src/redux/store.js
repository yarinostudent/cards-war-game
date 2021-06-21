import { createStore } from 'redux';
import reducers from './reducers/index';

const appStore = createStore(, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default appStore;