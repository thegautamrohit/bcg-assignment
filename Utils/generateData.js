export const randomArray = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

export const getRandomConsumptionValue = (min, max) => {
  if (min && max) {
    const randomDecimal = Math.random();

    const randomValue = randomDecimal * (max - min) + min;
    return Math.floor(randomValue);
  } else return null;
};
