import React, { useEffect } from "react";
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
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const dash = (ctx, value) => (ctx?.p0DataIndex < 5 ? value : [6, 0]);

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [100, 120, 90, 140, 150, 110, 160],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      segment: {
        borderDash: (ctx) => dash(ctx, [6, 6]) || [6, 0],
      },
      tension: 0,
    },
    {
      label: "Dataset 2",
      data: [120, 110, 70, 130, 110, 170, 60],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const ChartComponent = () => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default ChartComponent;
