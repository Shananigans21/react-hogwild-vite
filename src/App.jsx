import React, { useState } from "react";

function App() {
  const [hogs, setHogs] = useState([
    {
      name: "Babe",
      specialty: "Being cute",
      greased: false,
      weight: 200,
      highestMedal: "gold",
    },
    {
      name: "Bailey",
      specialty: "Grunting",
      greased: true,
      weight: 150,
      highestMedal: "silver",
    },
    {
      name: "Cherub",
      specialty: "Being angelic",
      greased: false,
      weight: 250,
      highestMedal: "bronze",
    },
    {
      name: "Galaxy Note",
      specialty: "Tech-savvy",
      greased: true,
      weight: 180,
      highestMedal: "gold",
    },
  ]);

  const [isGreased, setIsGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const handleGreasedChange = (e) => setIsGreased(e.target.checked);
  const handleSortChange = (e) => setSortBy(e.target.value);

  // NEW: Function to hide a hog by name
  const hideHog = (hogName) => {
    setHogs((prevHogs) => prevHogs.filter((hog) => hog.name !== hogName));
  };

  const filteredHogs = hogs
    .filter((hog) => (isGreased ? hog.greased : true))
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return a.weight - b.weight;
      }
    });

  return (
    <div>
      <div>
        <label htmlFor="greased">Greased</label>
        <input
          id="greased"
          name="greased"
          type="checkbox"
          onChange={handleGreasedChange}
        />

        <label htmlFor="sort">Sort by:</label>
        <select id="sort" onChange={handleSortChange} value={sortBy}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>

      <div className="hog-list">
        {filteredHogs.map((hog, idx) => (
          <div key={idx} className="hog-card">
            <h2>{hog.name}</h2>
            <img
              alt={hog.name}
              src={`https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/${hog.name.toLowerCase()}.jpg`}
            />
            <button>Show Details</button>

            {/* UPDATED: Add onClick to hide the hog */}
            <button onClick={() => hideHog(hog.name)}>Hide Hog</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
