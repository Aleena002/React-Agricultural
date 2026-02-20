import React from "react";

function MainContent({ crop }) {
  return (
    <div>
      <h2>{crop.name}</h2>
      <p>{crop.description}</p>
      <p>Season: {crop.season}</p>
    </div>
  );
}

export default MainContent;
