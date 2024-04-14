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
    <div className="relative">
      <Header />
      <Map cities={cities} onCityClick={handleCityClick} />
      <div className="text-white absolute left-10 top-32 z-[1000] text-3xl font-bold">
        <h4>Hello User,</h4>
      </div>
      <CityWidget />
    </div>
  );
}

export default LandingPage;
