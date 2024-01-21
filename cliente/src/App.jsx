import io from "socket.io-client"
import { useState } from "react"

const socket = io('http://localhost:3000')
console.log(socket)


function App() {

  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(message)
    socket.emit('message', message)

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="write your messages" onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">send</button>
    </form>
  )
}

export default App
