import diets from "../data/diets";

function dietGenerator() {
  const randomDecimal = Math.random();
  const randomIndex = Math.floor(randomDecimal * diets.length);
  return diets[randomIndex];
}

export default dietGenerator;
