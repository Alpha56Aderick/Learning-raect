import React from "react";
import "./quote.css";
import myQuotes from "./data";

function QuoteCard() {
  const trialQuote = myQuotes.filter((trial) => trial.category === "trials");
  const quotes = trialQuote.map((quote) => (
    <div key={quote.id} className="info-card">
      <div className="card-content">
        <p className="card-text">{quote.quoting}</p>
        <h3>{quote.author}</h3>
      </div>
    </div>
  ));
  return <>{quotes}</>;
}

export default QuoteCard;
