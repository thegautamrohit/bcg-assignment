import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const Map = ({ cities, onCityClick }) => {
  const mapRef = useRef(null);

  const handleCityClick = (city) => {
    onCityClick(city);
  };

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: "100vh", width: "100%" }}
      ref={mapRef}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {cities.map((city) => (
        <Marker
          key={city.id}
          position={[city.lat, city.lng]}
          // onClick={() => handleCityClick(city)}
          // icon={icon}
        >
          <Popup>{city.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
