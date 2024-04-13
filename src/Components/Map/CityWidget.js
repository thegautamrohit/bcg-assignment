import React from "react";

const CityWidget = ({ city }) => {
  return (
    <div className="city-widget">
      <h3>{city.name} </h3>
      <p>Population: {city.population.toLocaleString()}</p>
      <p>Country: {city.country}</p>
      {/* Add more city data to display */}
    </div>
  );
};

export default CityWidget;
