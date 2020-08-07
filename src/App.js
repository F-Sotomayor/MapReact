import React from "react";
import "./styles/App.scss";
import NavBar from "./components/NavBar";
import Landing from "./components/LandingPage";
import Map from "./components/Map";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <NavBar />
            <Landing />
          </Route>
          <Route path="/map" exact>
            <Map />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
