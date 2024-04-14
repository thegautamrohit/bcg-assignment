import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  //   Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const options = {
  responsive: true,
  plugins: {
    // legend: {
    //   position: "top",
    // },
    title: {
      display: true,
      text: "",
    },
  },
};

const labels = [
  "Q1 2022",
  "Q2 2022",
  "Q3 2022",
  "Q4 2022",
  "Q1 2023",
  "Q2 2023",
  "Q3 2024",
  "Q4 2024",
  "Q1 2025",
  "Q2 2025",
  "Q3 2025",
  "Q4 2025",
  "Q1 2026",
  "Q2 2026",
  "Q3 2026",
  "Q4 2026",
];

const ChartComponent = ({ selectedStack }) => {
  // console.log(selectedStack);

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

  const data = {
    labels,
    datasets: [
      {
        label: "AI Forecast",
        data: sanitisedData?.aiForecastHistoric,
        borderColor: "rgb(38, 188, 32)",
        backgroundColor: "rgba(38, 188, 32, 1)",
        // segment: {
        //   borderDash: (ctx) => dash(ctx, [6, 6]) || [6, 0],
        // },
        // tension: 0,
      },
      {
        label: "Final Forecast",
        data: sanitisedData?.finalForecastHistoric,
        borderColor: "rgb(245, 235, 10)",
        backgroundColor: "rgba(245, 235, 10, 1)",
        // segment: {
        // borderDash: [6, 6],
        // },
        // tension: 0,
      },
      {
        label: "Consumption",
        data: sanitisedData?.finalConsumption,
        borderColor: "rgb(121, 192, 255)",
        backgroundColor: "rgba(121, 192, 255, 1)",
        // segment: {
        //   borderDash: (ctx) => dash(ctx, [6, 6]) || [6, 0],
        // },
        // tension: 0,
      },
      {
        label: "AI Forecast",
        data: sanitisedData?.aiForecast,
        borderColor: "rgb(38, 188, 32)",
        backgroundColor: "rgba(38, 188, 32, 1)",
        // segment: {
        //   borderDash: (ctx) => dash(ctx, [6, 6]) || [6, 0],
        // },
        // tension: 0,
        borderDash: [6, 6],
      },
      {
        label: "Final Forecast",
        data: sanitisedData?.finalForecast,
        borderColor: "rgb(245, 235, 10)",
        backgroundColor: "rgba(245, 235, 10, 1)",
        // segment: {
        //   borderDash: (ctx) => dash(ctx, [6, 6]) || [6, 0],
        // },
        // tension: 0,
        borderDash: [6, 6],
      },
      {
        label: "Previous Final Forecast",
        data: sanitisedData?.finalConsumptionPrevious,
        borderColor: "rgb(244, 151, 10)",
        backgroundColor: "rgba(244, 151, 10, 1)",
        // segment: {
        borderDash: [6, 6],
        // },

        // tension: 0,
      },
    ],
  };

  return (
    <div className="max-h-[65vh]">
      {sanitisedData?.aiForecastHistoric && (
        <Line options={options} data={data} />
      )}
    </div>
  );
};

export default ChartComponent;
