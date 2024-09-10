import React from 'react'

const Message = () => {

    function handleClick () {
        console.log("Button Clicked");
    }
  return (
    <div>
      <button onClick={handleClick}>Click here to get a message</button>
    </div>
  )
}

export default Message
