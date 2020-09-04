import React from "react";

function InfoWindow(props) {
  return (
    <div>
      <div>Tipo: {props.type}</div>
      <div>Nota: {props.note}</div>
      <div>Fecha: {props.posted}</div>
    </div>
  );
}

export default InfoWindow;
