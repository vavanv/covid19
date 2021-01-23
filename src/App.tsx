import React from "react";
// import { MapContainer, TileLayer } from "react-leaflet";
// import "./App.css";
// import "leaflet/dist/leaflet.css";
// import "../node_modules/mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL from "react-map-gl";

// import { styles } from "./styles";
import { API_KEY } from "./constants";

// function App2() {
//   return (
//     <MapContainer center={[0, 0]} zoom={3.3}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       ></TileLayer>
//     </MapContainer>
//   );
// }

function App() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapboxApiAccessToken={
        "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA"
      }
      onViewportChange={(viewport) => setViewport(viewport)}
      mapStyle="mapbox://styles/mapbox/light-v10"
      // className={classes.map}
    />
  );
}

export default App;
