import React, { useState, useEffect } from "react";
import Header from "./Header";
import ChartComponent from "./Chart";
import Table from "./Table";

function HeroComponent({ selectedStack }) {
  const [sanitisedData, setSanitisedData] = useState({});

  useEffect(() => {
    const { quaterWiseData } = selectedStack;

    const result = {
      aiForecastHistoric: [],
      finalForecastHistoric: [],
      finalConsumption: [],
      aiForecast: [],
      finalForecast: [],
      finalConsumptionPrevious: [],
    };

    for (const year in quaterWiseData) {
      const quartersData = quaterWiseData[year];

      // Iterate through each quarter's data
      quartersData.forEach((quarter) => {
        result.aiForecastHistoric.push(quarter.aiForecast_historic);
        result.finalForecastHistoric.push(quarter.finalForecast_historic);
        result.finalConsumption.push(quarter.finalConsumption);
        result.aiForecast.push(quarter.aiForecast);
        result.finalForecast.push(quarter.finalForecast);
        result.finalConsumptionPrevious.push(quarter.finalConsumption_previous);
      });
    }

    setSanitisedData(result);
  }, [selectedStack]);

  return (
    <div>
      <Header />
      <ChartComponent sanitisedData={sanitisedData} />
      <Table sanitisedData={sanitisedData} />
    </div>
  );
}

export default HeroComponent;
