import React, { useState } from "react";
import "./App.css";
import { Header, Summary, PlanGenerator } from "./components";
import dietGenerator from "./utilities/dietGenerator";
import workoutGenerator from "./utilities/workoutGenerator";

function App() {
  const [workout, setWorkout] = useState("");
  const [diet, setDiet] = useState("");
  function getDiet() {
    const data = dietGenerator();
    setDiet(data);
  }
  function getWorkout() {
    const data = workoutGenerator();
    setWorkout(data);
  }

  return (
    <>
      <Header />
      <Summary />
      <PlanGenerator
        diet={diet}
        workout={workout}
        getDiet={getDiet}
        getWorkout={getWorkout}
      />
    </>
  );
}

export default App;
