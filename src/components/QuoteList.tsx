import  { useState, useEffect } from 'react';

interface Quote {
  text: string;
  author: string;
}

const QuoteList = () => {
  const [data, setData] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://type.fit/api/quotes');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.text}>
            <div>Author: {item.author}</div>
            <div>Quote: {item.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;




