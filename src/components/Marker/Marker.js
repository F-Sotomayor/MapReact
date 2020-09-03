import React from "react";
import "./marker.scss";
import InfoWindow from "./InfoWindow";

const Marker = ({ isSelected, onSelect, ...marker }) => {
  return (
    <>
      {isSelected && (
        <div className="infoWindow">
          <InfoWindow />
        </div>
      )}
      <div className="markerContainer">
        <img alt="icon" src={`${marker.type}.png`} onClick={onSelect} />
      </div>
    </>
  );
};

export default Marker;
