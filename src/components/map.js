import React from "react";
import "../styles/map.scss";
import GoogleMapReact from "google-map-react";
import Logout from "./Logout";
import Marker from "./Marker/Marker";
import "firebase/firestore";
import { database } from "../firebase";

const Map = () => {
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [draft, setDraft] = React.useState(null);
  const [report, setReport] = React.useState(null);
  const [note, setNote] = React.useState(null);

  function handleSubmit() {
    setNote(() => (draft.desc = note));
    setReport(() => (draft.report = report));
    setMarkers((markers) => markers.concat(draft));
    database.collection("Markers").doc(`${markers.length}`).set({
      Informacion: draft,
    });
    setNote(null);
    setReport(null);
    setDraft(null);
  }

  React.useEffect(() => {
    database
      .collection("Markers")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          setMarkers((markers) => markers.concat(doc.data().Informacion));
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="map">
      {draft && (
        // Modal
        <div className="modal">
          <div className="backdrop"></div>
          <div className="content">
            <div className="title"> ¿Que desea reportar?</div>
            <div className="reports">
              <label>
                Iluminacion
                <input
                  onChange={(event) => setReport(event.target.value)}
                  type="radio"
                  name="report"
                  value="Iluminacion"
                  required
                />
              </label>
              <label>
                Inseguridad
                <input
                  onChange={(event) => setReport(event.target.value)}
                  type="radio"
                  name="report"
                  value="Inseguridad"
                  required
                />
              </label>
              <label>
                Terreno
                <input
                  onChange={(event) => setReport(event.target.value)}
                  type="radio"
                  name="report"
                  value="Terreno"
                  required
                />
              </label>
            </div>
            <div className="note">Agregue una nota</div>
            <textarea
              onChange={(event) => setNote(event.target.value)}
              resize="none"
              placeholder="Agregue una nota a su reporte.."
              cols="20"
              rows="5"
              maxLength="50"
            />
            <div className="buttons">
              <button onClick={handleSubmit}>Enviar</button>
              <button
                onClick={() => {
                  setDraft(null);
                  setNote(null);
                  setReport(null);
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
            id: new Date().toLocaleString(),
            desc: note,
            report: report,
          });
        }}
      >
        {markers.map((marker) => (
          <Marker
            lat={marker.lat}
            lng={marker.lng}
            posted={marker.id}
            key={marker.id}
            note={marker.desc}
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
