import React, { useState } from "react";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map/Map"), { ssr: false });
import CityWidget from "./Map/CityWidget";
import Header from "./Header";

function LandingPage() {
  const [selectedCity, setSelectedCity] = useState({
    id: 1,
    name: "New York",
    lat: 40.7128,
    lng: -74.006,
    population: 8623000,
    country: "USA",
  });

  const cities = [
    {
      id: 1,
      name: "New York",
      lat: 40.7128,
      lng: -74.006,
      population: 8623000,
      country: "USA",
    },
    {
      id: 2,
      name: "London",
      lat: 51.5074,
      lng: -0.1278,
      population: 8908081,
      country: "UK",
    },
  ];

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div>
      <Header />
      <Map cities={cities} onCityClick={handleCityClick} />
      {selectedCity && (
        <div className="city-widget-container">
          <CityWidget city={selectedCity} />
          <h1>TEST</h1>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
