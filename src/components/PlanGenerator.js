import "./PlanGenerator.css";

function PlanGenerator({ diet, workout, getDiet, getWorkout }) {
  return (
    <main>
      <div className="col">
        <button onClick={() => getDiet()}>Generate Diet</button>
        {!diet ? (
          <div></div>
        ) : (
          <>
            <p>{`Diet: ${diet.diet}`}</p>
            <p>{`Tip: ${diet.tip}`}</p>
          </>
        )}
      </div>
      <div className="col">
        <button onClick={() => getWorkout()}>Generate Workout</button>
        {!workout ? (
          <></>
        ) : (
          <>
            <p>{`Workout: ${workout.workout}`}</p>
            <p>{`Tip: ${workout.tip}`}</p>
          </>
        )}
      </div>
    </main>
  );
}

export default PlanGenerator;
