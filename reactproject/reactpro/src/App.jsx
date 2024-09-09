import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";

function App() {
  const person = {
    name: "Rob",
    message: "Good morning",
    emoji: "👋",
    seatNumbers: [1, 4, 7],
  };

  return (
    <div className="App">
      <h1>
        <Hello person={person} />
      </h1>
      <Fruits />
    </div>
  );
}

export default App;
