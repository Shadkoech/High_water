// import React, { useReducer, useState } from "react";

// const App = () => {
//   const [state, dispatch] = useReducer(reducer, {count:0, incrementBy: 1 })

//   function reducer(state, action) {
//     if (action.type == "increment"){
//       return {...state, count: state.count + state.incrementBy } // state + action.payload
//     }
//     if (action.type=="decrement") {
//       return {...state, count: state.count + state.incrementBy } // state - action.payload;
//     }
//     if (action.type == "setIncrement"){
//       return {...state, incrementBy:action.payload}
//     }

//   }

//   return (
//     <div>
//       useReducer: {state.count}
//       <input value = {state.incrementBy} onChange={(e) => dispatch({type:"setIncrement", payload:Number(e.target.value)})} type="text" />
//       <br/>
//       <button onClick={() => dispatch({type:"increment"})}>Increment count</button>
//       <br/>
//       <button onClick={() => dispatch({type:"decrement"})}>Decrement count</button>
//     </div>
//   );
// };

// export default App;

import React, { useReducer, useState } from "react";

const App = () => {
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);
  function reducer(state, action) {
    if (action.type == "add") {
      return { ...state, balance: state.balance + action.payload };
    }
    if (action.type == "sub") {
      return { ...state, balance: state.balance - action.payload };
    }
  }
  return (
    <div>
      {state.balance}
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button
        onClick={() => dispatch({ type: "add", payload: Number(amount) })}
      >
        Deposit
      </button>
      <button
        onClick={() => dispatch({ type: "sub", payload: Number(amount) })}
      >
        Withdraw
      </button>
    </div>
  );
};

export default App;
