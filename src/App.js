import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Gallery from './Artistree/Gallery/Gallery';
import Canvas from './Artistree/Canvas/Canvas';
import MySubmissions from './Artistree/MySubmissions';
import LeavingFeedback from './Artistree/LeavingFeedback/LeavingFeedback';
import NavBar from './Artistree/NavBar';
import Modal from 'react-modal';
import { useState } from 'react';
import Eula from './Artistree/EULA';

function App() {
  const [modalIsOpen, setModalIsOPen] = useState(false)
  return (
    <div className="App">
      <button onClick = {() => setModalIsOPen(true)}>Report</button>
      <Modal isOpen={modalIsOpen}>
        <h2>
          Reason for Reporting
        </h2>
        <p>
          1.
          2.
          3.
        </p>
      </Modal>
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
            <MySubmissions />
            </Route>
          <Route exact path="/leave-feedback">
            <LeavingFeedback />
          </Route>
          <Route exact path ="/eula">
            <Eula />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
