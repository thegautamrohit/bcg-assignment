import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ cities, onCityClick }) => {
  const mapRef = useRef(null);
  //   useEffect(() => {
  //     if (mapRef.current) {
  //       mapRef.current.setView([0, 0], 2); // Set initial view to center of the world with zoom level 2
  //       setTimeout(() => {
  //         mapRef.current.flyTo([0, 0], 6, { duration: 2 }); // Animate to zoom level 6 over 2 seconds
  //       }, 1000); // Delay the animation by 1 second for initial load
  //     }
  //   }, []);

  const handleCityClick = (city) => {
    onCityClick(city);
  };

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "100vh", width: "100%" }}
      ref={mapRef}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {cities.map((city) => (
        <Marker
          key={city.id}
          position={[city.lat, city.lng]}
          onClick={() => handleCityClick(city)}
        >
          <Popup>{city.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
