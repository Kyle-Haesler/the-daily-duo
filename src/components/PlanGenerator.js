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
            <b>
              <p>{`Diet: ${diet.diet}`}</p>
            </b>
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
            <b>
              <p>{`Workout: ${workout.workout}`}</p>
            </b>
            <p>{`Tip: ${workout.tip}`}</p>
          </>
        )}
      </div>
    </main>
  );
}

export default PlanGenerator;
