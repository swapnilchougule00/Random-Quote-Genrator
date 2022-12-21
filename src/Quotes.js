import React, { useState } from "react";
import data from "./data";
import "./quotes.css";

function Quotes() {
  const [index, setIndex] = useState(5);

  const randomQuote = () => {
    let random = Math.floor(Math.random() * data.length);
    setIndex(random);
    
    setQuote(data[index]);
    // console.log(random)
  };

  const [quote, setQuote] = useState(data[index]);

  return (
    
      <div className="main">
        <div className="quote">
          <p>{quote.quote}</p>
        </div>
<div className="author">
        <p>-{quote.auther}</p>
        </div>
        <div className="btn">

        <button onClick={() => randomQuote()}>Change</button>
        </div>
      </div>
    
  );
}

export default Quotes;
