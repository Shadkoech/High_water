import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState("");
  return (
    <div>
      <form >
        <input type="text" onChange={(e)=> setTodo(e.target.value)} value={todo} />
        <button type='submit'>Add</button>
      </form>

    </div>
  )
}

export default Todo
