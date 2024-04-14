import React from "react";
import { CityWidgetData } from "../../../../CityWidgetData";
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
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import Link from "next/link";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const CityWidget = ({ city }) => {
  return (
    <div
      id="city_widget_container"
      className="absolute bottom-10 left-10 z-[1000] flex items-center justify-start gap-8"
    >
      {CityWidgetData?.map((city, index) => (
        <Link
          href="/details"
          key={city.id}
          className="border border-white rounded-md"
          style={{
            borderImage: "linear-gradient(blue, cyan) 30",
            borderWidth: "2px",
            borderStyle: "solid",
            // boxShadow: "1px 0.5px 2px #e7e7e7",
            backgroundColor: "rgba(255,255,255,0.05)",
          }}
        >
          <CityCard city={city} />
        </Link>
      ))}
    </div>
  );
};

export default CityWidget;

function CityCard({ city }) {
  return (
    <div className="text-white p-4 flex flex-col gap-4 justify-between ">
      <h1 className="text-lg font-semibold">{city?.name}</h1>
      <div id="upper" className="flex flex-col gap">
        <p className="text-lg">Forecast</p>
        <div className="flex items-center justify-between gap-6">
          <p className="font-semibold text-lg">{city?.graph1?.value}</p>
          <div>
            <Chart cityInfo={city?.graph1} />
          </div>
          <span>
            <ArrowUpwardOutlinedIcon
              style={{
                color: "green",
              }}
            />
          </span>
        </div>
      </div>
      <div id="lower" className="flex flex-col gap">
        <p className="text-lg">Forecast</p>
        <div className="flex items-center justify-between gap-6">
          <p className="font-semibold text-lg">{city?.graph2?.value}</p>
          <div>
            <Chart cityInfo={city?.graph2} />
          </div>
          <span>
            <ArrowDownwardOutlinedIcon
              style={{
                color: "#ff4154",
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function Chart({ cityInfo }) {
  const { plotting1, plotting2 } = cityInfo;

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [...plotting1],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0,
        radius: 0,
      },
      {
        label: "Dataset 2",
        data: [...plotting2],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderDash: [5, 5],
        radius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legends: {
        display: false,
      },
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.yLabel;
        },
      },
    },

    labels: {
      display: false,
    },

    scales: {
      x: {
        display: false,
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        display: false,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="h-14 w-max">
      <Line options={options} data={data} />
    </div>
  );
}
