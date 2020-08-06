import React from "react";
import "./styles/App.scss";
import NavBar from "./components/NavBar";
import Landing from "./components/LandingPage";

class App extends React.Component {
  render() {
    return (
      <div className="wrap">
        <NavBar />
        <Landing />;
      </div>
    );
  }
}

export default App;
