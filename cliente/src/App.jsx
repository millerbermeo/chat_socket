import io from "socket.io-client"
import { useState, useEffect } from "react"

const socket = io('http://localhost:3000')
// console.log(socket)


function App() {

  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(message)
    socket.emit('message', message)


  }

  useEffect(() => {
    socket.on("message", message => {
      console.log(message);

      setMessages([...messages, message])
    });

    
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="write your messages" onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">send</button>
      </form>

      <ul>
      {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </>
  )
}

export default App
