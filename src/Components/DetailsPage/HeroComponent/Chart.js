import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  title: {
    display: true,
    text: "",
  },
  tooltips: {
    mode: "label",
  },
  hover: {
    mode: "nearest",
    intersect: true,
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "CONSUMPTION",
      },
      gridLines: {
        color: "#fff",
        display: true,
      },
    },
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false,
        },
        scaleLabel: {
          display: true,
          labelString: "Quarter",
        },
      },
    ],
  },
};

const labels = [
  "Q2 2022",
  "Q3 2022",
  "Q4 2022",
  "Q1 2023",
  "Q2 2023",
  "Q3 2023",
  "Q4 2023",
  "Q1 2024",
  "Q2 2024",
  "Q3 2024",
  "Q4 2024",
  "Q1 2025",
  "Q2 2025",
  "Q3 2025",
  "Q4 2025",
  "Q1 2026",
  "Q2 2026",
];

const ChartComponent = ({ sanitisedData }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "AI Forecast",
        data: sanitisedData?.aiForecastHistoric,
        borderColor: "rgb(38, 188, 32)",
        backgroundColor: "rgba(38, 188, 32, 1)",
      },
      {
        label: "Final Forecast",
        data: sanitisedData?.finalForecastHistoric,
        borderColor: "rgb(245, 235, 10)",
        backgroundColor: "rgba(245, 235, 10, 1)",
      },
      {
        label: "Consumption",
        data: sanitisedData?.finalConsumption,
        borderColor: "rgb(121, 192, 255)",
        backgroundColor: "rgba(121, 192, 255, 1)",
      },
      {
        label: "AI Forecast",
        data: sanitisedData?.aiForecast,
        borderColor: "rgb(38, 188, 32)",
        backgroundColor: "rgba(38, 188, 32, 1)",

        borderDash: [6, 6],
      },
      {
        label: "Final Forecast",
        data: sanitisedData?.finalForecast,
        borderColor: "rgb(245, 235, 10)",
        backgroundColor: "rgba(245, 235, 10, 1)",

        borderDash: [6, 6],
      },
      {
        label: "Previous Final Forecast",
        data: sanitisedData?.finalConsumptionPrevious,
        borderColor: "rgb(244, 151, 10)",
        backgroundColor: "rgba(244, 151, 10, 1)",

        borderDash: [6, 6],
      },
    ],
  };

  return (
    <div className="max-h-[56vh] ml-6">
      {sanitisedData?.aiForecastHistoric && (
        <Line options={options} data={data} />
      )}
    </div>
  );
};

export default ChartComponent;
