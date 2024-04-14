import { getRandomConsumptionValue } from "./Utils/generateData";
import { uuid } from "uuidv4";

export const CityStackData = [
  {
    stackId: uuid(),
    stackType: "backlog",
    displayName: "General Stack 1",
    quaterWiseData: {
      // will have quaters number as indexed
      2022: [
        {
          aiForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalConsumption: getRandomConsumptionValue(300000, 900000),
          aiForecast: getRandomConsumptionValue(null, null),
          finalForecast: getRandomConsumptionValue(null, null),
          finalConsumption_previous: getRandomConsumptionValue(null, null),
        },
        {
          aiForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalConsumption: getRandomConsumptionValue(300000, 900000),
          aiForecast: getRandomConsumptionValue(null, null),
          finalForecast: getRandomConsumptionValue(null, null),
          finalConsumption_previous: getRandomConsumptionValue(null, null),
        },
        {
          aiForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalConsumption: getRandomConsumptionValue(300000, 900000),
          aiForecast: getRandomConsumptionValue(null, null),
          finalForecast: getRandomConsumptionValue(null, null),
          finalConsumption_previous: getRandomConsumptionValue(null, null),
        },
      ],
      2023: [
        // will have quaters number as indexed
        {
          aiForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalConsumption: getRandomConsumptionValue(300000, 900000),
          aiForecast: getRandomConsumptionValue(null, null),
          finalForecast: getRandomConsumptionValue(null, null),
          finalConsumption_previous: getRandomConsumptionValue(null, null),
        },
        {
          aiForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalConsumption: getRandomConsumptionValue(300000, 900000),
          aiForecast: getRandomConsumptionValue(null, null),
          finalForecast: getRandomConsumptionValue(null, null),
          finalConsumption_previous: getRandomConsumptionValue(null, null),
        },
        {
          aiForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalConsumption: getRandomConsumptionValue(300000, 900000),
          aiForecast: getRandomConsumptionValue(null, null),
          finalForecast: getRandomConsumptionValue(null, null),
          finalConsumption_previous: getRandomConsumptionValue(null, null),
        },
        {
          aiForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalConsumption: getRandomConsumptionValue(300000, 900000),
          aiForecast: getRandomConsumptionValue(null, null),
          finalForecast: getRandomConsumptionValue(null, null),
          finalConsumption_previous: getRandomConsumptionValue(null, null),
        },
      ],
      2024: [
        // will have quaters number as indexed
        {
          aiForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalConsumption: getRandomConsumptionValue(300000, 900000),
          aiForecast: getRandomConsumptionValue(null, null),
          finalForecast: getRandomConsumptionValue(null, null),
          finalConsumption_previous: getRandomConsumptionValue(null, null),
        },
        {
          aiForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalForecast_historic: getRandomConsumptionValue(300000, 900000),
          finalConsumption: getRandomConsumptionValue(300000, 900000),
          aiForecast: getRandomConsumptionValue(null, null),
          finalForecast: getRandomConsumptionValue(null, null),
          finalConsumption_previous: getRandomConsumptionValue(null, null),
        },
        {
          aiForecast_historic: getRandomConsumptionValue(null, null),
          finalForecast_historic: getRandomConsumptionValue(null, null),
          finalConsumption: getRandomConsumptionValue(null, null),
          aiForecast: getRandomConsumptionValue(300000, 900000),
          finalForecast: getRandomConsumptionValue(300000, 900000),
          finalConsumption_previous: getRandomConsumptionValue(300000, 900000),
        },
        {
          aiForecast_historic: getRandomConsumptionValue(null, null),
          finalForecast_historic: getRandomConsumptionValue(null, null),
          finalConsumption: getRandomConsumptionValue(null, null),
          aiForecast: getRandomConsumptionValue(300000, 900000),
          finalForecast: getRandomConsumptionValue(300000, 900000),
          finalConsumption_previous: getRandomConsumptionValue(300000, 900000),
        },
      ],
      2025: [
        // will have quaters number as indexed
        {
          aiForecast_historic: getRandomConsumptionValue(null, null),
          finalForecast_historic: getRandomConsumptionValue(null, null),
          finalConsumption: getRandomConsumptionValue(null, null),
          aiForecast: getRandomConsumptionValue(300000, 900000),
          finalForecast: getRandomConsumptionValue(300000, 900000),
          finalConsumption_previous: getRandomConsumptionValue(300000, 900000),
        },
        {
          aiForecast_historic: getRandomConsumptionValue(null, null),
          finalForecast_historic: getRandomConsumptionValue(null, null),
          finalConsumption: getRandomConsumptionValue(null, null),
          aiForecast: getRandomConsumptionValue(300000, 900000),
          finalForecast: getRandomConsumptionValue(300000, 900000),
          finalConsumption_previous: getRandomConsumptionValue(300000, 900000),
        },
        {
          aiForecast_historic: getRandomConsumptionValue(null, null),
          finalForecast_historic: getRandomConsumptionValue(null, null),
          finalConsumption: getRandomConsumptionValue(null, null),
          aiForecast: getRandomConsumptionValue(300000, 900000),
          finalForecast: getRandomConsumptionValue(300000, 900000),
          finalConsumption_previous: getRandomConsumptionValue(300000, 900000),
        },
        {
          aiForecast_historic: getRandomConsumptionValue(null, null),
          finalForecast_historic: getRandomConsumptionValue(null, null),
          finalConsumption: getRandomConsumptionValue(null, null),
          aiForecast: getRandomConsumptionValue(300000, 900000),
          finalForecast: getRandomConsumptionValue(300000, 900000),
          finalConsumption_previous: getRandomConsumptionValue(300000, 900000),
        },
      ],
      2026: [
        // will have quaters number as indexed
        {
          aiForecast_historic: getRandomConsumptionValue(null, null),
          finalForecast_historic: getRandomConsumptionValue(null, null),
          finalConsumption: getRandomConsumptionValue(null, null),
          aiForecast: getRandomConsumptionValue(300000, 900000),
          finalForecast: getRandomConsumptionValue(300000, 900000),
          finalConsumption_previous: getRandomConsumptionValue(300000, 900000),
        },
        {
          aiForecast_historic: getRandomConsumptionValue(null, null),
          finalForecast_historic: getRandomConsumptionValue(null, null),
          finalConsumption: getRandomConsumptionValue(null, null),
          aiForecast: getRandomConsumptionValue(300000, 900000),
          finalForecast: getRandomConsumptionValue(300000, 900000),
          finalConsumption_previous: getRandomConsumptionValue(300000, 900000),
        },
      ],
    },
  },
];
