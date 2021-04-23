import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Gallery from "./Artistree/Gallery/Gallery";
import Canvas from "./Artistree/Canvas/Canvas";
import LeavingFeedback from "./Artistree/LeavingFeedback/LeavingFeedback";
import NavBar from "./Artistree/NavBar";
import Eula from "./Artistree/EULA";
import ViewingFeedback from "./Artistree/ViewingFeedback/ViewingFeedback";

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Gallery />
          </Route>
          <Route exact path="/canvas">
            <Canvas />
          </Route>
          <Route exact path="/my-submissions">
            <ViewingFeedback />
          </Route>
          <Route exact path="/leave-feedback">
            <LeavingFeedback />
          </Route>
          <Route exact path="/eula">
            <Eula />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
