import Quote from "../models/Quote";
// import Props from "../models/Props";

interface QuoteListProps {
  quotes: Quote[];
}

const QuoteList = ({ quotes }: QuoteListProps) => {
  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {quotes.map((item) => (
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



