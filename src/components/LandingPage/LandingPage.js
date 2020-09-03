import React from "react";
import "./landing.scss";
import mappreview from "../../images/map-preview.png";
import NavBar from "./NavBar";
import { auth, providers } from "../../firebase";

const Landing = () => {
  return (
    <div>
      <NavBar />
      <div className="landing-container">
        <div className="landing-wrap">
          <div className="landing-title">
            <h3>Un mapa interactivo para que, entre todos, nos cuidemos!</h3>
          </div>

          <div className="landing-preview">
            <img src={mappreview} alt="map-preview"></img>
          </div>

          <div className="landing-login">
            <button
              onClick={() => {
                auth.signInWithPopup(providers.google);
              }}
            >
              Ingresar!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
