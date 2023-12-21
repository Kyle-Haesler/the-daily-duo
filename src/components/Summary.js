import "./Summary.css";
function Summary() {
  return (
    <article>
      <div className="col">
        <h2>The Daily Duo</h2>
        <ul>
          <li>
            The Daily Duo was created to inspire small, consistent changes
          </li>
          <li>
            We believe that small, relatively easy daily changes can lead to
            significant positive effects down the road
          </li>
          <li>We believe in the power of consistency</li>
        </ul>
      </div>
      <div className="col">
        <h2>Summary</h2>
        <ul>
          <li>
            Everyday, come to our website and generate a diet and a workout for
            the day
          </li>
          <li>
            Follow this protocol for atleast a week and note any changes you may
            see or feel
          </li>
          <li>
            These protocols are intentionally designed to be quick and not
            terribly taxing
          </li>
        </ul>
      </div>
      <div className="col">
        <h2>Who is this for?</h2>
        <ul>
          <li>
            This is for anyone out there who wants to make a change in their
            life
          </li>
          <li>From beginners to advanced, it does not matter</li>
          <li>Consistency and habit forming is key</li>
        </ul>
      </div>
    </article>
  );
}

export default Summary;
