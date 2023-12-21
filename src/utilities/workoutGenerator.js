import workouts from "../data/workouts";

function workoutGenerator() {
  const randomDecimal = Math.random();
  const randomIndex = Math.floor(randomDecimal * workouts.length);
  return workouts[randomIndex];
}

export default workoutGenerator;
