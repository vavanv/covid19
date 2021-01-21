import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <MapContainer center={[43.653225, -79.383186]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      ></TileLayer>
    </MapContainer>
  );
}

export default App;
