import { getRandomConsumptionValue } from "./Utils/generateData";
import { uuid } from "uuidv4";

export const CityStackData = [
  {
    stackId: uuid(),
    stackType: "backlog",
    displayName: "General Stack 1",
    quaterWiseData: {
      historical: {
        year: {
          2022: [
            // will have quaters number in indexed
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000), // Consumption
              aiPrediction: getRandomConsumptionValue(300000, 900000), // AI forecast
              finalForecast: getRandomConsumptionValue(300000, 900000), //yellow line
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
          2023: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
        },
      },
      forcasted: {
        year: {
          2024: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
          2025: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
        },
      },
    },
  },
  {
    stackId: uuid(),
    stackType: "backlog",
    displayName: "General Stack 2",
    quaterWiseData: {
      historical: {
        year: {
          2022: [
            // will have quaters number in indexed
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000), // Consumption
              aiPrediction: getRandomConsumptionValue(300000, 900000), // AI forecast
              finalForecast: getRandomConsumptionValue(300000, 900000), //yellow line
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
          2023: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
        },
      },
      forcasted: {
        year: {
          2024: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
          2025: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
        },
      },
    },
  },
  {
    stackId: uuid(),
    stackType: "backlog",
    displayName: "General Stack 3",
    quaterWiseData: {
      historical: {
        year: {
          2022: [
            // will have quaters number in indexed
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000), // Consumption
              aiPrediction: getRandomConsumptionValue(300000, 900000), // AI forecast
              finalForecast: getRandomConsumptionValue(300000, 900000), //yellow line
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
          2023: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
        },
      },
      forcasted: {
        year: {
          2024: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
          2025: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
        },
      },
    },
  },
  {
    stackId: uuid(),
    stackType: "backlog",
    displayName: "General Stack 4",
    quaterWiseData: {
      historical: {
        year: {
          2022: [
            // will have quaters number in indexed
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000), // Consumption
              aiPrediction: getRandomConsumptionValue(300000, 900000), // AI forecast
              finalForecast: getRandomConsumptionValue(300000, 900000), //yellow line
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
          2023: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
        },
      },
      forcasted: {
        year: {
          2024: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
          2025: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
        },
      },
    },
  },
  {
    stackId: uuid(),
    stackType: "backlog",
    displayName: "General Stack 5",
    quaterWiseData: {
      historical: {
        year: {
          2022: [
            // will have quaters number in indexed
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000), // Consumption
              aiPrediction: getRandomConsumptionValue(300000, 900000), // AI forecast
              finalForecast: getRandomConsumptionValue(300000, 900000), //yellow line
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
          2023: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
        },
      },
      forcasted: {
        year: {
          2024: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
          2025: [
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
            {
              finalConsumption: getRandomConsumptionValue(300000, 900000),
              aiPrediction: getRandomConsumptionValue(300000, 900000),
              finalForecast: getRandomConsumptionValue(300000, 900000),
            },
          ],
        },
      },
    },
  },
];
