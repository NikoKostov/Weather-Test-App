import React, { useState } from "react";

function Form({ submitSearch }) {
  const [location, setLocation] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search for place"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit" onClick={onSubmit}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Form;
