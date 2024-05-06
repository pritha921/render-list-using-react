import { useState, useEffect } from "react";
import QuoteList from "./components/QuoteList";
import GenerateQuote from "./components/GenerateQuote";
import Quote from "./models/Quote";

const App = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const jsonData = await response.json();
        setQuotes(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>My App</h1>
        {isLoading ? <p>Loading...</p> : <QuoteList quotes={quotes} />}
      </div>
      <div>
        <GenerateQuote quotes={quotes} />
      </div>
    </>
  );
};

export default App;



