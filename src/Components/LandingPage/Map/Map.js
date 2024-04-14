import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
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

const cities = [
  {
    id: 1,
    name: "New Delhi",
    lat: 28.7041,
    lng: 77.1025,
    population: 32941000,
    country: "India",
  },
  {
    id: 2,
    name: "Mumbai",
    lat: 19.076,
    lng: 72.8777,
    population: 21673149,
    country: "India",
  },
];

const Map = () => {
  const mapRef = useRef(null);

  return (
    <div className="m-h-[90vh]">
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
            <Tooltip>
              <div>
                <p>City: {city?.name}</p>
                <p>Population: {city?.population}</p>
                <p>Country: {city?.country}</p>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
