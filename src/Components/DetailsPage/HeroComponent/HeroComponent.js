import React, { useState, useEffect } from "react";
import Header from "./Header";
import ChartComponent from "./Chart";
import Table from "./Table";

function HeroComponent({ selectedStack }) {
  const [sanitisedData, setSanitisedData] = useState({});
  const [tableData, setTableData] = useState([]);

  function mergeData(arr1, arr2) {
    // function to merge two array of frecasted and historic values
    let res = arr1.map((value, index) => {
      if (value === null && arr2[index] !== null) {
        return arr2[index];
      } else {
        return value;
      }
    });

    return res;
  }

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

    let tempTableData = {
      aiForecast: mergeData(
        [...result.aiForecastHistoric],
        [...result.aiForecast]
      ),
      finalForecast: mergeData(
        [...result.finalForecastHistoric],
        [...result.finalForecast]
      ),
      consumption: mergeData(
        [...result.finalConsumption],
        [...result.finalConsumptionPrevious]
      ),
    };

    setSanitisedData(result);
    setTableData(tempTableData);
  }, [selectedStack]);

  return (
    <div>
      <Header selectedStack={selectedStack} />
      <ChartComponent sanitisedData={sanitisedData} />
      <Table tableData={tableData} />
    </div>
  );
}

export default HeroComponent;
