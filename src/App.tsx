import QuoteList from "./components/QuoteList";
import GenerateQuote from "./components/GenerateQuote";

const App = () => {
  return (
    <>
      <div>
        <h1>My App</h1>
        <QuoteList />
      </div>
      <div>
        <GenerateQuote />
      </div>
    </>
  );
};

export default App;
