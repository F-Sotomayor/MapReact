import React from "react";
import "../styles/map.scss";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import Modal from "./Modal";

class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: -34.7185677,
      lng: -58.2763967,
    },
    zoom: 17,
  };
  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD40iBClWX-S8w5BeFPSfWFDJNfa2DI8fw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
        <Link to="/">
          <Logout />
        </Link>
        <Modal />
      </div>
    );
  }
}

export default Map;
