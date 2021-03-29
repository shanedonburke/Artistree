import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Gallery from './Artistree/Gallery';
import NavBar from './Artistree/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Gallery></Gallery>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
