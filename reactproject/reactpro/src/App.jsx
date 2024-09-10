import ConditionalComponent from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  const person = {
    name: "Rob",
    message: "Good morning",
    emoji: "👋",
    seatNumbers: [1, 4, 7],
  };

  return (
    <div className="App">
      {/* <h1>
        <Hello person={person} />
      </h1>
      <Fruits /> */}

      {/* <Message /> */}
      {/* <Counter /> */}
      <Form />
    </div>
  );
}

export default App;
