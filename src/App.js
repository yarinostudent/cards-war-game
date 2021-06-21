import './App.css';
import StartGame from './containers/game';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SetGame from './containers/setGame';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={SetGame} />
          <Route path="/startGame" component={StartGame} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
