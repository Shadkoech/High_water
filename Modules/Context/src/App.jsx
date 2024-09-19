import { createContext, useState } from "react";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
export const userContext = createContext();

function App() {
  const [user, setUser] = useState("guest");
  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        <Login />
        <Checkout />
      </userContext.Provider>
    </div>
  );
}

export default App;
