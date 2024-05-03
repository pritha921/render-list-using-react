import { useState } from 'react';
import Quote from "../models/Quote"

const GenerateQuote = () => {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);

  const generateRandomQuote = () => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomQuote(data[randomIndex]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <button onClick={generateRandomQuote}>Generate Random Quote</button>
      {randomQuote && (
        <div>
          <p>{randomQuote.text}</p>
          <p> {randomQuote.author}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateQuote;


