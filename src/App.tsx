// import { useState, useEffect } from "react";
// // import QuoteList from "./components/QuoteList";
// import GenerateQuote from "./components/GenerateQuote";
// import Quote from "./models/Quote";

// const App = () => {
//   const [quotes, setQuotes] = useState<Quote[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch("https://type.fit/api/quotes");
//         const jsonData = await response.json();
//         setQuotes(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//       setIsLoading(false);
//     };

//     fetchData();
//   }, []);

//   // return (
//   //   <>
//   //     <div>
//   //       <h1>My App</h1>
//   //       {isLoading ? <p>Loading...</p> : <QuoteList quotes={quotes} />}
//   //     </div>
//   //     <div>
//   //       <GenerateQuote quotes={quotes} />
//   //     </div>
//   //   </>
//   // );

//   return (
//     <>
//       <div>
//         <h1>My App</h1>
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : currentQuote ? (
//           <div>
//             <p>{currentQuote.text}</p>
//             <p>- {currentQuote.author}</p>
//           </div>
//         ) : (
//           <p>No quote to display</p>
//         )}
//       </div>
//       <div>
//         <GenerateQuote quotes={quotes} setCurrentQuote={setCurrentQuote} />
//       </div>
//     </>
//   );
// };


// export default App;


import { useState, useEffect } from "react";
import GenerateQuote from "./components/GenerateQuote";
import Quote from "./models/Quote";

const App = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const jsonData = await response.json();
        setQuotes(jsonData);

        // Select a random quote as the initial quote
        const randomIndex = Math.floor(Math.random() * jsonData.length);
        setCurrentQuote(jsonData[randomIndex]);
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
        {isLoading ? (
          <p>Loading...</p>
        ) : currentQuote ? (
          <div>
            <p>{currentQuote.text}</p>
            <p>- {currentQuote.author}</p>
          </div>
        ) : (
          <p>No quote to display</p>
        )}
      </div>
      <div>
        <GenerateQuote quotes={quotes} setCurrentQuote={setCurrentQuote} />
      </div>
    </>
  );
};

export default App;