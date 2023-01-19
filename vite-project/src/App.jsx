import React from "react";
import { useState } from "react";
import Apart from "./Apart";
import House from "./House";

export default function App() {
  const [displayOption, setDisplayOption] = useState("");

  const optionApart = () => {
    setDisplayOption("option1");
  }

  const optionHouse = () => {
    setDisplayOption("option2");
  }

  return(
    <div>
      <h2>Prisberäknare</h2>
      <button onClick={optionApart}>Lägenhet</button>
      <button onClick={optionHouse}>Villa</button>
      {displayOption === "option1" ? <Apart /> : null}
      {displayOption === "option2" ? <House /> : null}
    </div>
)
}

