import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import Innercontainer from "./components/Innercontainer";
import FoodDetails from "./components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("")

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <Innercontainer>
          <FoodList foodData={foodData} setFoodId = {setFoodId} />
        </Innercontainer>
        <Innercontainer>
          <FoodDetails foodId={foodId}/>
        </Innercontainer>
      </Container>
    </div>
  );
}

export default App;
