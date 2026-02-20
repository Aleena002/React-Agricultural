import React from "react";

function Header({title, tagline}){
  return(
    <header className="bg-success text-white text-center p-3">
      <h1>{title}</h1>
      <p>{tagline}</p>
    </header> 
  );
}

export default Header;