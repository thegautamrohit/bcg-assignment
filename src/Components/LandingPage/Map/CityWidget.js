import React, { useState, useEffect } from "react";
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
import { useRouter } from "next/router";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const CityWidget = ({ position }) => {
  const [styles, setStyles] = useState({});

  const router = useRouter();

  useEffect(() => {
    let tempPos = {};

    if (position === "top") {
      tempPos = {
        top: 200,
        left: 10,
        width: "95vw",
      };
    }

    if (position === "bottom") {
      tempPos = {
        bottom: 10,
        left: 10,
        width: "95vw",
      };
    }

    if (position === "left") {
      tempPos = {
        top: 200,
        left: 10,
        height: "75vh",
      };
    }

    if (position === "right") {
      tempPos = {
        top: 200,
        right: 10,
        height: "75vh",
      };
    }

    setStyles(tempPos);
  }, [position]);

  return (
    <div
      id="city__widget__container"
      className="absolute z-[1000] city__widget__container"
      style={{
        ...styles,
      }}
    >
      <div
        className="flex items-center justify-start gap-8 h-full"
        style={{
          overflowX: (position === "top" || position === "bottom") && "scroll",
          overflowY: (position === "left" || position === "right") && "scroll",
          flexDirection:
            position === "top" || position === "bottom" ? "row" : "column",
        }}
      >
        {CityWidgetData?.map((city, index) => (
          <div
            onClick={() => router.push("/details")}
            key={city.id}
            className="border border-white rounded-md cursor-pointer"
            style={{
              borderImage: "linear-gradient(blue, cyan) 30",
              borderWidth: "2px",
              borderStyle: "solid",
              backgroundColor: "rgb(21, 53, 66, 0.7)",
              boxShadow: "1px 0.5px 2px #e7e7e7",
            }}
          >
            <CityCard city={city} />
          </div>
        ))}
      </div>
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
