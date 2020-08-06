import React from "react";
import "../styles/landing.scss";
import mappreview from "../images/map-preview.png";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <div className="landing-wrap">
          <div className="landing-title">
            <h3>Un mapa interactivo para que, entre todos, nos cuidemos!</h3>
          </div>

          <div className="landing-preview">
            <img src={mappreview} alt="map-preview"></img>
          </div>

          <div className="landing-login">
            <button>Ingresar!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
