import  { useState } from 'react';
import Quote from "../models/Quote";
import Props from "../models/Props";

// interface Props {
//   quotes: Quote[];
// }

const GenerateQuote = ({ quotes }: Props) => {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <button onClick={generateRandomQuote}>Generate Random Quote</button>
      {randomQuote && (
        <div>
          <p>{randomQuote.text}</p>
          <p>{randomQuote.author}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateQuote;







