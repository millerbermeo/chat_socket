import  io  from "socket.io-client"


const socket = io('http://localhost:3000')
console.log(socket)

function App() {
  return (
    <div>
      <h1>hola mundo</h1>
    </div>
  )
}

export default App
