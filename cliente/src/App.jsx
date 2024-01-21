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

    const newMessage = {
      body: message,
      from: 'me'
    }
    setMessages([...messages, newMessage])
    socket.emit('message', message)


  }

  const receiveMessage = (message) => setMessages((state) =>[...state, message]);

  useEffect(() => {
    socket.on("message",receiveMessage)

    return ()=>{
      socket.off("message", receiveMessage)
    }
  }, []);

  return (
    <>
          <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-zinc-900 p-10">
        <h1 className="text-2xl font-bold my-2">Chat React</h1>
        <input
          name="message"
          type="text"
          placeholder="Write your message..."
          onChange={(e) => setMessage(e.target.value)}
          className="border-2 border-zinc-500 p-2 w-full text-black"
          value={message}
          autoFocus
        />

        <ul className="h-80 overflow-y-auto">
          {messages.map((message, index) => (
            <li
              key={index}
              className={`my-2 p-2 table text-sm rounded-md ${message.from === "me" ? "bg-sky-700 ml-auto" : "bg-black"
                }`}
            >
              <b>{message.from}</b>:{message.body}
            </li>
          ))}
        </ul>
      </form>
    </div>

    </>
  )
}

export default App
