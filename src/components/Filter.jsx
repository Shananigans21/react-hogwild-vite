// src/components/Filter.jsx

import React from "react";

function Filter({ onFilterGreased, onSort }) {
  return (
    <div>
      <label htmlFor="greased">Greased</label>
      <input
        type="checkbox"
        id="greased"
        name="greased" 
        
        onChange={e => onFilterGreased(e.target.checked)}
      />
      
      <label htmlFor="sort">Sort by</label>
      <select onChange={e => onSort(e.target.value)}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default Filter;
