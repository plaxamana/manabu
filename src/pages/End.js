import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";

export default function End() {
  return (
    <Card>
      <div className="card-body">
        <p className="card-heading">
          Ending this session? <br /> Pat yourself on the back, well deserved!
        </p>

        <p>Make sure to have your journal nearby to note down your learning</p>
        <p>In your journal, write about the following:</p>

        <ol className="list">
          <li>Write three wins from your learning session</li>
          <li>Write down two ways you could improve for next time</li>
        </ol>
        <div className="btn-container">
          <Link to="/start">
            <button>Go Back</button>
          </Link>
          <Link to="/complete">
            <button className="CTA" style={{ margin: 0 }}>
              Done
            </button>
          </Link>
        </div>
      </div>
      <div className="dyk-container">
        <p className="dyk-title">Did you know?</p>
        <p className="dyk-body">
          Spending time reflecting on your wins and where you can improve can
          make you a better learner
        </p>
      </div>
    </Card>
  );
}
