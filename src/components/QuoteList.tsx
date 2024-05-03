import { useState, useEffect } from "react";
import Quote from "../models/Quote"
const QuoteList = () => {
  const [data, setData] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          data.map((item) => (
            <li style={{backgroundColor:"red"}}key={item.text}>
              <div>Author: {item.author}</div>
              <div>Quote: {item.text}</div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default QuoteList;
