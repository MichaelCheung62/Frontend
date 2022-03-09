import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import FAQ from './components/FAQ';
import GameDetails from './components/GameDetails';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/watchlist">
          <Watchlist />
        </Route>
        <Route exact path="/FAQ">
          <FAQ />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/games/:id" component={GameDetails} />
      </Switch>
    </Router>
  );
}

/* comment */
export default App;
