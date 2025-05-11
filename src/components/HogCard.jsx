import React, { useState } from "react"; // Add this import

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false); // useState hook

  return (
    <div className="hog-card">
      <h2>{hog.name}</h2>
      <img src={hog.image} alt={hog.name} />
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div className="details">
          <p>{hog.specialty}</p>
          <p>{hog["highest medal achieved"]}</p>
          <p>Weight: {hog.weight}</p>
        </div>
      )}
      <button onClick={() => onHide(hog.name)}>Hide Hog</button>
    </div>
  );
}

export default HogCard;
