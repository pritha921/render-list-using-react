import React from "react";
import Quote from "../models/Quote";

interface GenerateQuoteProps {
  quotes: Quote[];
  setCurrentQuote: React.Dispatch<React.SetStateAction<Quote | null>>;
}

const GenerateQuote = ({ quotes, setCurrentQuote }: GenerateQuoteProps) => {
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <button onClick={getRandomQuote}>Generate Random Quote</button>
  );
};

export default GenerateQuote;







