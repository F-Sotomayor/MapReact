import React from "react";
import "../styles/map.scss";
import GoogleMapReact from "google-map-react";
import Logout from "./Logout";
import Marker from "./Marker/Marker";

const Map = () => {
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [draft, setDraft] = React.useState(null);

  function handleSubmit() {
    setMarkers((markers) => markers.concat(draft));
    setDraft(null);
  }

  return (
    <div className="map">
      {draft && (
        <div className="modal">
          <div className="backdrop"></div>
          <div className="content">
            <div className="title"> ¿Que desea reportar?</div>
            <div className="reports">
              <label>
                Iluminacion
                <input type="radio" name="report" value="Iluminacion" />
              </label>
              <label>
                Inseguridad
                <input type="radio" name="report" value="Inseguridad" />
              </label>
              <label>
                Terreno
                <input type="radio" name="report" value=" Terreno" />
              </label>
            </div>
            <div className="note">Agregue una nota</div>
            <textarea
              resize="none"
              placeholder="Agregue una nota a su reporte.."
              cols="20"
              rows="5"
            />
            <div className="buttons">
              <button onClick={handleSubmit}>Enviar</button>
              <button
                onClick={() => {
                  setDraft(null);
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD40iBClWX-S8w5BeFPSfWFDJNfa2DI8fw" }}
        defaultCenter={{ lat: -34.7185677, lng: -58.2763967 }}
        zoom={17}
        onClick={(e) => {
          setDraft({
            lat: e.lat,
            lng: e.lng,
            id: +new Date(),
            report: "Iluminacion",
          });
        }}
      >
        {markers.map((marker) => (
          <Marker
            lat={marker.lat}
            lng={marker.lng}
            key={marker.id}
            type={marker.report}
            isSelected={selected === marker.id}
            onSelect={() => setSelected(marker.id)}
          />
        ))}
      </GoogleMapReact>

      <Logout />
    </div>
  );
};

export default Map;
