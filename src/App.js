import './App.css';
import StartGame from './containers/randomWar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SetGame from './containers/setGame';
import Header from './containers/header';


function App() {

  return (
    <div className="App">
      <Header />
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
